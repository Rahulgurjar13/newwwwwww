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


type FAQ = {
  id: string;
  question: string;
  answer: string;
};

type BlogForm = {
  title: string;
  category: string;
  slug: string;
  author : string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  alt: string;
  subContent: string;
  content: string;
  schemaTitle : string,
  schemaDescription : string
};


export default  function BlogEditor() {
    const {id} = useParams();
  
    const [form, setForm] = useState<BlogForm>({
      title: "",
      category: "",
      slug: "",
      author : "",
      metaTitle: "",
      metaDescription: "",
      image: "",
      alt: "",
      subContent: "",
      content: "",
      schemaTitle : "",
      schemaDescription : ""
    });

    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    
    

  
  useEffect(()=>{
    const getBlogs = async()=>{
        const {data, error} = await supabase.from('Blog').select('*').eq('id',id).single();

        if(error){
          console.log(error);
          return;
        }

        setForm({
          title: data.title ?? "",
          category: data.category ?? "",
          slug: data.slug ?? "",
          author : data.author ?? "",
          metaTitle: data.meta?.title ?? "",
          metaDescription: data.meta?.description ?? "",
          image: data.image ?? "",
          alt: data.alt ?? "",
          subContent: data.subcontent ?? "",
          content: data.content ?? "",
          schemaTitle : data.schema.title ?? "",
          schemaDescription : data.schema.description ?? ""

      });

      setFaqs(data.faqs ?? []);
      setLoading(false);
    }
    getBlogs();
  },[id]);

  //Saving data

 const handleSave = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    if (form.content.length < 300) {
      toast.error("At least 300 characters required");
      return;
    }

     const { data: existingData, error:existingError } = await supabase
      .from("Blog")
      .select("id")
      .eq("slug", form.slug);
      

   
    if (existingData &&  (existingData.length > 1 ||  (existingData?.length==1 && existingData[0].id !== id))) {
      toast.error("Slug already exists");
      return;
    }
      




   const {error} = await supabase.from("Blog").update({
      title: form.title,
      category: form.category,
      author : form.author,
      slug: form.slug,
      image: form.image,
      alt: form.alt,
      subcontent: form.subContent,
      content: form.content,
      meta: {
        title: form.metaTitle,
        description: form.metaDescription,
      },
      schema : {
        title : form.schemaTitle,
        description : form.schemaDescription
      },
      faqs: faqs,

    }).eq("id", id);
    

    if (error) {
      toast.error(error.message);
      return;
   }


   toast.success("Blog Updated Successfully"); 
  };

  

  const handlePreview = () => {
  };

  const handlePublish = async () => {
    // await publishPackageAction(packageId);
  };

  // onChange handler
  const updateForm = (field : keyof BlogForm,value : string)=>{
    setForm((prev)=>({...prev, [field]:value}));
  }

  if (loading) return <CMSLoading/>

  return (
     <div className="max-w-6xl mx-auto p-8 rounded-2xl
      bg-gradient-to-br from-[#0b1220]/80 via-[#0e1a2f]/80 to-[#0a1020]/80
      backdrop-blur-xl border border-white/10
      shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)]">

      <form className='space-y-6' onSubmit={handleSave}>
        <CMSHeader editorType="Blog" />
        <CMSMetaSection title = {form.title} category = {form.category} slug = {form.slug} onChange = {updateForm} editorType="Blog"/>
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
        <CMSSeoSection metaTitle = {form.metaTitle} metaDescription = {form.metaDescription} onChange = {updateForm} editorType="Blog"/>
         <CMSSchema schemaTitle={form.schemaTitle} schemaDescription={form.schemaDescription} onChange={updateForm} editorType='Blog' />
        <FaqHandler faqs = {faqs} setFaqs = {setFaqs} editorType="Blog"/>
        <CMSMediaSection image = {form.image} alt = {form.alt} onChange = {updateForm} editorType="Blog"/>
        <CMSContentSection subContent={form.subContent} content = {form.content} onChange = {updateForm} editorType="Blog"/>
        <CMSActions 
         actionType='update'
         editorType='Blog'
        
         onPreview={handlePreview}
         onPublish={handlePublish} />
      </form>

    </div>

  );
}
