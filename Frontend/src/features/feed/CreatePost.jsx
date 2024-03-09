import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { useState } from "react";
import Button from "../../ui/Button";
import FormField from "../../ui/FormUI/FormField";
import FormLabel from "../../ui/FormUI/FormLabel";
import { MdOutlineDelete } from "react-icons/md";
import { usePostsContext } from "../../Context/PostsProvider";
import uuid from "react-uuid";

function CreatePost() {
  const { register, handleSubmit } = useForm();
  const [tags, setTags] = useState("");
  const [tagarr, setTagArr] = useState([]);
  const { addPost } = usePostsContext();

  function onSubmitFunc(data) {
    data.image = "https://source.unsplash.com/random";
    data.tags = tagarr;
    data.id = uuid();
    data.likes = 0;
    // console.log(data);
    addPost(data);
  }

  function handleTagDelete(tag) {
    setTagArr((prev) => prev.filter((t) => t !== tag));
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmitFunc)}
      className="max-w-100 mx-auto flex flex-col items-center justify-center "
    >
      <FormField type="primary">
        <FormLabel htmlFor="title">Tittle</FormLabel>
        <input
          type="text"
          id="title"
          name="title"
          className="grow p-2 text-sm"
          {...register("title", {
            required: true,
          })}
        />
      </FormField>
      <FormField type="primary">
        <FormLabel htmlFor="body">Body</FormLabel>
        <input
          type="textarea"
          name="body"
          id="body"
          {...register("body")}
          className="grow p-2 text-sm"
        />
      </FormField>

      <FormField type="secondary">
        <FormLabel htmlFor="tags">Tags</FormLabel>
        <div className="flex grow flex-col gap-4">
          <div className="flex  grow items-center">
            <input
              type="text"
              id="tags"
              name="tags"
              value={tags}
              className="grow p-2 text-sm"
              onChange={(e) => setTags(e.target.value)}
            />
            <Button
              type="primary"
              onClick={(e) => {
                e.preventDefault();
                setTagArr((t) => {
                  if (!t.includes(tags)) {
                    return [...t, tags];
                  }
                });
                setTags("");
              }}
            >
              Set
            </Button>
          </div>
          <ul className="flex flex-wrap gap-2 ">
            {tagarr.length !== 0 &&
              tagarr.map((t) => {
                return (
                  <li
                    key={t}
                    className="flex items-center gap-2 rounded-md border border-cyan-500 px-2 py-1 font-serif text-sm italic text-stone-500"
                  >
                    <span>{t}</span>
                    <span onClick={() => handleTagDelete(t)}>
                      <MdOutlineDelete />
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </FormField>

      <FormField type="primary">
        <FormLabel htmlFor="image">Images</FormLabel>
        <input type="file" name="image" id="image" {...register("image")} />
      </FormField>
      <div className="ms-auto mt-8 px-4">
        <Button type="base">post</Button>
      </div>
    </Form>
  );
}

export default CreatePost;
