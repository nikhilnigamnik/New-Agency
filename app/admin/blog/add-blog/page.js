"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { Switch } from "@/components/ui/switch";
import LoadingBar from "react-top-loading-bar";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [tags, setTags] = useState([""]);
  const [editorContent, setEditorContent] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  const handleEditorChange = (content) => {
    setEditorContent(content);

    setFormData((prevFormData) => ({
      ...prevFormData,
      content: content,
    }));
  };
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    banner: "",
    content: "",
    tags: [],
    status: true,
  });

  console.log(formData);

  const addTags = () => {
    setTags([...tags, ""]);
  };

  const handleOnChange = (e, index) => {
    const { name, value } = e.target;

    if (name === "tags") {
      handleTagChange(index, value);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        slug: name === "title" ? generateSlug(value) : prevFormData.slug,
      }));
    }
  };

  const handleTagChange = (index, value) => {
    const updatedTags = [...tags];
    updatedTags[index] = value;

    setTags(updatedTags);
    setFormData((prevFormData) => ({
      ...prevFormData,
      tags: updatedTags,
    }));
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const submit = async (e) => {
    ref.current.continuousStart();
    e.preventDefault();
    try {
      if (
        !formData.title ||
        !formData.slug ||
        !formData.banner ||
        !formData.content ||
        !formData.tags
      )
        return toast.error("Please fill all the fields", {
          icon: "❌",
          style: {
            borderRadius: "100px",
            background: "#060918",
            color: "#fff",
            border: "1px solid rgb(31 41 55 / 1)",
          },
        });

      const res = await axios.post("/api/blog", formData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setFormData({
        title: "",
        slug: "",
        banner: "",
        content: "",
        tags: [],
        status: "",
      });
    } finally {
      ref.current.complete();
      toast.success("Blog added successfully", {
        icon: "✅",
        style: {
          borderRadius: "100px",
          background: "#060918",
          color: "#fff",
          border: "1px solid rgb(31 41 55 / 1)",
        },
      });
    }
  };

  return (
    <>
      <LoadingBar color="#f11946" ref={ref} />
      <div className="flex justify-between items-center">
        <h4>Add Blog</h4>
        <Switch />
      </div>
      <form onSubmit={submit} className="flex flex-col gap-8 py-4">
        <div className="flex gap-10">
          <Input
            name={"title"}
            id={"title"}
            type="text"
            placeholder="Enter Title"
            value={formData.title}
            onChange={handleOnChange}
          />
          <Input
            type="text"
            name={"slug"}
            id={"slug"}
            placeholder="Enter Slug"
            value={generateSlug(formData.title)}
            onChange={handleOnChange}
          />
        </div>

        <Input
          type="text"
          name={"banner"}
          id={"banner"}
          placeholder="Banner Link"
          value={formData.banner}
          onChange={handleOnChange}
        />

        <div className="flex justify-between gap-4">
          {tags.map((tag, index) => (
            <Input
              key={index}
              type="text"
              name="tags"
              id={`tag-${index}`}
              placeholder="Tags"
              value={tag}
              onChange={(e) => handleTagChange(index, e.target.value)}
            />
          ))}
          <button
            className="px-4 py-1 bg-secondary rounded-full"
            type="button"
            onClick={addTags}
          >
            Add
          </button>
        </div>

        <Editor
          apiKey="qo7easkqbu3texet25py42w905z0zw1zxbpe5wbcy71qlo85"
          init={{
            branding: false,
            height: 500,
            menubar: true,
            plugins: [
              "image",
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
              "anchor",
            ],
            toolbar:
              "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onEditorChange={handleEditorChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default Page;
