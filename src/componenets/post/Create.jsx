import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { apis } from "../../shared/axios";
import RESP from "../../server/response";
import { parseHashtags, notEmptyCheck } from "../../shared/regex";

// TODO change to 정사각형
const Create = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [isLoading, setIsLoading] = useState(true);
  const [fileUrls, setFileUrls] = useState([]);
  const [currImg, setCurrImg] = useState(0);
  const [lastImg, setLastImg] = useState(0);

  const navigate = useNavigate();

  // TODO blob 알아보기
  const onSubmitHandler = async ({ content, files }) => {
    // const contentBlob = new Blob([json], { type: "application/json" });
    // const formData = new FormData();
    // formData.append("content", content);
    // formData.append("files", files);

    const hashtags = parseHashtags(content);

    // const resp = await apis.create_post(content, files, hashtags);
    // const { result, status: { message } } = resp.data;

    // success
    const {
      result,
      status: { message },
    } = RESP.POST.CREATE_SUCCESS;

    // fail
    // const {
    //   result,
    //   status: { message },
    // } = RESP.POST.CREATE_FAIL;

    // const {
    //   result,
    //   status: { message },
    // } = RESP.POST.CREATE_FAIL_AUTH;

    // TODO
    if (!result) {
      alert(message);
      return;
    }

    reset({ content: "", files: [] });
  };

  const onImageHandler = async (e) => {
    setIsLoading(true);

    const files = e.target.files;
    const fileList = Array.from(files);
    const urlList = fileList.map((file) => URL.createObjectURL(file));

    setFileUrls([...urlList]);
    setCurrImg(0);
    setLastImg(files.length - 1);

    if (files.length !== 0) {
      setIsLoading(false);
    }
  };

  const onPrevHandler = () => {
    setCurrImg((prev) => (prev - 1 < 0 ? lastImg : prev - 1));
  };

  const onNextHandler = () => {
    setCurrImg((prev) => (prev + 1 > lastImg ? 0 : prev + 1));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <input
            type='text'
            id='content'
            {...register("content", {
              required: "You should write content to create post.",
              maxLength: {
                value: 1000,
                message: "Content should be shorter than 1000 characters.",
              },
              validate: {
                notEmpty: (value) =>
                  notEmptyCheck(value) || "Content cannot be empty string.",
              },
            })}
          />
          {errors.content ? <div>{errors.content.message}</div> : null}
        </div>
        <button type='submit'>Create Post</button>
        <div>
          <input
            {...register("files")}
            id='files'
            type='file'
            accept='image/jpg, image/png, image/jpeg'
            multiple
            onChange={onImageHandler}
          />
        </div>
        {!isLoading ? (
          <div>
            <button type='button' onClick={onPrevHandler}>
              prev
            </button>
            <img src={fileUrls[currImg]} alt='img' width='300px' />
            <div>
              {currImg + 1}/ {lastImg + 1}
            </div>
            <button type='button' onClick={onNextHandler}>
              next
            </button>
          </div>
        ) : null}
      </form>
    </>
  );
};

export default Create;
