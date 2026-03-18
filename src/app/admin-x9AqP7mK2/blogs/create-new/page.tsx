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

type BlogForm = {

  title: string;
  category: string,
  slug: string,
  author: string,
  metaTitle: string,
  metaDescription: string,
  image: string,
  alt: string,
  subContent: string
  content: string
  schemaTitle: string,
  schemaDescription: string

}

type FAQ = {

  id: string,
  question: string,
  answer: string

}



export default function CreateNewBlog() {

  const [form, setForm] = useState<BlogForm>({
    title: "",
    category: "",
    slug: "",
    author: "",
    metaTitle: "",
    metaDescription: "",
    image: "",
    alt: "",
    subContent: "",
    content: "",
    schemaTitle: "",
    schemaDescription: ""
  });

  const [faqs, setFaqs] = useState<FAQ[]>([])



  const updateForm = (field: keyof BlogForm, value: string) => {

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


    if (form.content.length < 300) {
      toast.error("At least 300 characters required in blog content");
      return;
    }

    if (!form.image) {
      toast.error("Blog image is missing");
      return;
    };

    if (!form.category) {
      toast.error("Blog category is missing")
    }

    const { data: existingData, error: existingError } = await supabase
      .from("Blog")
      .select("id")
      .eq("slug", form.slug);

    if (existingData && existingData?.length > 0) {
      toast.error("Slug already exists");
      return;
    }


    const payload = {
      title: form.title,
      category: form.category,
      slug: form.slug,
      meta: {
        title: form.metaTitle,
        description: form.metaDescription,
      },
      schema : {
        title : form.schemaTitle,
        description : form.schemaDescription
      },
      image: form.image,
      alt: form.alt,
      subcontent: form.subContent,
      content: form.content,
      author: form.author,
      faqs,
    };

    const { data, error } = await supabase
      .from("Blog")
      .insert(payload)
      .select("*")
      .single();

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Blog Published Successfully");
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
        <CMSHeader editorType="Blog" />
        <CMSMetaSection title={form.title} category={form.category} slug={form.slug} onChange={updateForm} editorType="Blog" />
        <div>
          <label className="text-sm text-white/70">Author</label>
          <input
            value={form.author}
            required
            onChange={(e) => { updateForm("author", e.target.value) }}
            placeholder="author name..."
            className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                    border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
          />
        </div>
        <CMSSeoSection metaTitle={form.metaTitle} metaDescription={form.metaDescription} onChange={updateForm} editorType="Blog" />
        <CMSSchema schemaTitle={form.schemaTitle} schemaDescription={form.schemaDescription} onChange={updateForm} editorType='Blog' />
        <FaqHandler faqs={faqs} setFaqs={setFaqs} editorType="Blog" />
        <CMSMediaSection image={form.image} alt={form.alt} onChange={updateForm} editorType="Blog" />
        <CMSContentSection subContent={form.subContent} content={form.content} onChange={updateForm} editorType="Blog" />
        <CMSActions
          actionType='create'
          editorType='Blog'
          onPreview={handlePreview}
          onPublish={handlePublish} />
      </form>

    </div>

  );
}
