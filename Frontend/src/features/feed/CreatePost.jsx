import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { useState } from "react";
import Button from "../../ui/Button";
import FormField from "../../ui/FormField";

function CreatePost() {
  const { register, handleSubmit } = useForm();
  const [tags, setTags] = useState("");
  const [tagarr, setTagArr] = useState([]);

  function onSubmitFunc(data) {
    data.image = "https://source.unsplash.com/random";
    data.tags = tagarr;
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmitFunc)} className="border">
      <FormField>
        <label htmlFor="title">Text</label>
        <input
          type="text"
          id="title"
          className="grow"
          name="title"
          {...register("title")}
        />
      </FormField>
      <FormField>
        <label htmlFor="body">Body</label>
        <input
          type="textarea"
          name="body"
          className="grow"
          id="body"
          rows={5}
          {...register("body")}
        />
      </FormField>

      <FormField>
        <label htmlFor="tags">Tags</label>
        <div className="flex grow flex-col gap-4">
          <div>
            <input
              type="text"
              id="tags "
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <Button
              type="primary"
              onClick={(e) => {
                setTagArr((t) => [...t, tags]);
                setTags("");
                e.preventDefault();
              }}
            >
              Set
            </Button>
          </div>
          <div>
            {tagarr.length !== 0 && tagarr.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </FormField>

      <FormField>
        <label htmlFor="">Images</label>
        <input type="file" name="image" {...register("image")} />
      </FormField>
      <Button type="base">post</Button>
    </Form>
  );
}

export default CreatePost;
