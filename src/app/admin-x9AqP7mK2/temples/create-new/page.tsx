"use client"

import CMSActions from '@/components/Admin/CMS/CMSActions';
import CMSContentSection from '@/components/Admin/CMS/CMSContentSection';
import CMSHeader from '@/components/Admin/CMS/CMSHeader';
import CMSMediaSection from '@/components/Admin/CMS/CMSMediaSection';
import CMSMetaSection from '@/components/Admin/CMS/CMSMetaSection';
import CMSSeoSection from '@/components/Admin/CMS/CMSSeoSection';
import FaqHandler from '@/components/Admin/CMS/FaqHandler';
import { useState } from 'react';
import { supabase } from '@/lib/supabase/SupabaseConfig';
import toast from 'react-hot-toast';
import CMSSchema from '@/components/Admin/CMS/CMSSchema';
import DarshanHandler from '@/components/Admin/TempleEditor/DarshanHandler';
import JourneyHandler from '@/components/Admin/TempleEditor/Journey';
import BestTimeHandler from '@/components/Admin/TempleEditor/TimeToVisit';
import TempleOverviewHandler from '@/components/Admin/TempleEditor/TempleOverview';

type TempleForm = {

  title: string;
  category: string,
  slug: string,
  metaTitle: string,
  metaDescription: string,
  image: string,
  alt: string,
  subContent: string
  history: string
  content: string
  schemaTitle: string,
  schemaDescription: string
  darshanTiming : string
  visits : string
  journey : string
  templeOverview : string
}

type FAQ = {

  id: string,
  question: string,
  answer: string

}




type Journey = {
  id: string,
  title: string,
  description: string
}

type TempleOverview = {
  id: string,
  title: string,
  description: string
}



export default function CreateNewTemple() {

  const [form, setForm] = useState<TempleForm>({
    title: "",
    category: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    image: "",
    history: "",
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

  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [TempleOverview, setTempleOverview] = useState<TempleOverview[]>([{ id: crypto.randomUUID(), title: "", description: "" }])



  const updateForm = (field: keyof TempleForm, value: string) => {

    setForm((prev) => {
      return { ...prev, [field]: value }
    })

  }

  const handleSave = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // browser validation check
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }


    if (!form.image) {
      toast.error("Temple image is missing");
      return;
    };

    if (!form.category) {
      toast.error("Temple category is missing")
    }

  


    const { data: existingData, error: existingError } = await supabase
      .from("Temple")
      .select("id")
      .eq("slug", form.slug);

    if (existingData && existingData?.length > 0) {
      toast.error("Slug already exists");
      return;
    }


    const payload = {
      title: form.title,
      location : form.category,
      slug: form.slug,
      meta: {
        title: form.metaTitle,
        description: form.metaDescription,
      },
      schema: {
        title: form.schemaTitle,
        description: form.schemaDescription
      },
      image: form.image,
      alt: form.alt,
      subcontent: form.subContent,
      content: form.content,
      faqs,
      history: form.history,
      timing: form.darshanTiming,
      bestvisit: form.visits,
      journey: form.journey,
      templeoverview: form.templeOverview,

    };

    const { data, error } = await supabase
      .from("Temple")
      .insert(payload)
      .select("*")
      .single();

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Temple Published Successfully");
  };


  const handlePreview = () => {
  };

  const handlePublish = async () => {
    // await publishPackageAction(packageId);
  };

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
            required
            onChange={(e) => { updateForm("history", e.target.value) }}
            placeholder="Short History Description Of The Temple..."
            className="mt-2 w-full px-5 py-5 rounded-xl bg-white/5 text-white
                    border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
          />
        </div>
        <CMSSeoSection metaTitle={form.metaTitle} metaDescription={form.metaDescription} onChange={updateForm} editorType="Blog" />
        <CMSSchema schemaTitle={form.schemaTitle} schemaDescription={form.schemaDescription} onChange={updateForm} editorType='Temple' />
        <DarshanHandler darshanTiming={form.darshanTiming} onChange={updateForm} editorType="Temple" />
        <BestTimeHandler visits={form.visits} onChange={updateForm} editorType="Temple" />

        <JourneyHandler journey={form.journey} onChange={updateForm} editorType="Temple" />
        <TempleOverviewHandler templeOverview={form.templeOverview} onChange={updateForm} editorType="Temple" />
        <FaqHandler faqs={faqs} setFaqs={setFaqs} editorType="Temple" />
        <CMSMediaSection image={form.image} alt={form.alt} onChange={updateForm} editorType="Temple" />
        <CMSContentSection subContent={form.subContent} content={form.content} onChange={updateForm} editorType="Temple" />
        <CMSActions
          actionType='create'
          editorType='Temple'
          onPreview={handlePreview}
          onPublish={handlePublish} />
      </form>

    </div>

  );
}
