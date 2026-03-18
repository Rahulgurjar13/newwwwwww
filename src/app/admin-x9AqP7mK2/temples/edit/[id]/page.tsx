"use client"

import CMSActions from '@/components/Admin/CMS/CMSActions';
import CMSContentSection from '@/components/Admin/CMS/CMSContentSection';
import CMSHeader from '@/components/Admin/CMS/CMSHeader';
import CMSMediaSection from '@/components/Admin/CMS/CMSMediaSection';
import CMSMetaSection from '@/components/Admin/CMS/CMSMetaSection';
import CMSSeoSection from '@/components/Admin/CMS/CMSSeoSection';
import FaqHandler from '@/components/Admin/CMS/FaqHandler';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/SupabaseConfig';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';
import CMSLoading from '@/components/Admin/CMS/CMSLoading';
import CMSSchema from '@/components/Admin/CMS/CMSSchema';
import DarshanHandler from '@/components/Admin/TempleEditor/DarshanHandler';
import JourneyHandler from '@/components/Admin/TempleEditor/Journey';
import BestTimeHandler from '@/components/Admin/TempleEditor/TimeToVisit';
import TempleOverviewHandler from '@/components/Admin/TempleEditor/TempleOverview';


type FAQ = {
    id: string
    question: string
    answer: string
}


type Journey = {
    id: string
    title: string
    description: string
}

type TempleOverview = {
    id: string
    title: string
    description: string
}

type TempleForm = {
    title: string
    category: string
    slug: string
    history: string
    metaTitle: string
    metaDescription: string
    image: string
    alt: string
    subContent: string
    content: string
    schemaTitle: string
    schemaDescription: string
    darshanTiming : string
    visits : string
    journey : string
    templeOverview : string
}


export default function TempleEditor() {

    const { id } = useParams();

    const [form, setForm] = useState<TempleForm>({
        title: "",
        category: "",
        slug: "",
        history: "",
        metaTitle: "",
        metaDescription: "",
        image: "",
        alt: "",
        subContent: "",
        content: "",
        schemaTitle: "",
        schemaDescription: "",
        darshanTiming : "",
        visits : "",
        journey : "",
        templeOverview : ""
    });

    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [journeys, setJourneys] = useState<Journey[]>([]);
    const [TempleOverview, setTempleOverview] = useState<TempleOverview[]>([]);

    const [loading, setLoading] = useState(true);



    useEffect(() => {

        const getTemple = async () => {

            const { data, error } = await supabase
                .from('Temple')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.log(error);
                return;
            }

            setForm({
                title: data.title ?? "",
                category: data.location ?? "",
                slug: data.slug ?? "",
                history: data.history ?? "",
                metaTitle: data.meta?.title ?? "",
                metaDescription: data.meta?.description ?? "",
                image: data.image ?? "",
                alt: data.alt ?? "",
                subContent: data.subcontent ?? "",
                content: data.content ?? "",
                schemaTitle: data.schema?.title ?? "",
                schemaDescription: data.schema?.description ?? "",
                darshanTiming : data.timing,
                visits : data.bestvisit,
                journey : data.journey,
                templeOverview : data.templeoverview
            });

            setFaqs(data.faqs ?? []);
            setJourneys(data.journey ?? []);
            setTempleOverview(data.templeoverview ?? []);

            setLoading(false);

        }

        getTemple();

    }, [id]);



    const updateForm = (field: keyof TempleForm, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    }



    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();



        const { data: existingData } = await supabase
            .from("Temple")
            .select("id")
            .eq("slug", form.slug);



        if (
            existingData &&
            (existingData.length > 1 ||
                (existingData.length === 1 && existingData[0].id !== id))
        ) {
            toast.error("Slug already exists");
            return;
        }

        



        const { error } = await supabase
            .from("Temple")
            .update({

                title: form.title,
                location: form.category,
                history: form.history,
                slug: form.slug,
                image: form.image,
                alt: form.alt,
                subcontent: form.subContent,
                content: form.content,


                meta: {
                    title: form.metaTitle,
                    description: form.metaDescription,
                },

                schema: {
                    title: form.schemaTitle,
                    description: form.schemaDescription
                },

                faqs: faqs,

                timing: form.darshanTiming,
                bestvisit: form.visits,
                journey: form.journey,
                templeoverview: form.templeOverview

            })
            .eq("id", id);



        if (error) {
            toast.error(error.message);
            return;
        }


        toast.success("Temple Updated Successfully");

    };



    const handlePreview = () => { };

    const handlePublish = async () => { };



    if (loading) return <CMSLoading />


    return (
        <div className="max-w-6xl mx-auto p-8 rounded-2xl
        bg-gradient-to-br from-[#0b1220]/80 via-[#0e1a2f]/80 to-[#0a1020]/80
        backdrop-blur-xl border border-white/10
        shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)]">

            <form className='space-y-6' onSubmit={handleSave}>

                <CMSHeader editorType="Temple" />

                <CMSMetaSection title={form.title} category={form.category} slug={form.slug} onChange={updateForm} editorType="Temple" />

                <div>
                    <label className="text-sm text-white/70">History</label>
                    <textarea
                        value={form.history}
                        rows={4}
                        required
                        onChange={(e) => updateForm("history", e.target.value)}
                        placeholder="Short History for the Temple..."
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                    border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                    />
                </div>

                <CMSSeoSection metaTitle={form.metaTitle} metaDescription={form.metaDescription} onChange={updateForm} editorType="Temple" />

                <CMSSchema schemaTitle={form.schemaTitle} schemaDescription={form.schemaDescription} onChange={updateForm} editorType='Temple' />

                <DarshanHandler darshanTiming={form.darshanTiming} onChange={updateForm} editorType="Temple" />
                <BestTimeHandler visits={form.visits} onChange={updateForm} editorType="Temple" />


               
                <JourneyHandler journey={form.journey} onChange={updateForm} editorType="Temple" />
                <TempleOverviewHandler templeOverview={form.templeOverview} onChange={updateForm} editorType="Temple" />


                <FaqHandler faqs={faqs} setFaqs={setFaqs} editorType="Temple" />

                <CMSMediaSection image={form.image} alt={form.alt} onChange={updateForm} editorType="Temple" />

                <CMSContentSection subContent={form.subContent} content={form.content} onChange={updateForm} editorType="Temple" />

                <CMSActions actionType='update' editorType='Temple' onPreview={handlePreview} onPublish={handlePublish} />

            </form>

        </div>
    )
}
