import { Avatar } from "antd";
import { useState, useEffect } from "react";
import { request, uploadfile } from "../../repositories";
// interface UploadData {
//   url: string;
//   filename: string;
// }

interface ProfileimgProps {
  onChange: (data: string) => void;
  initialImgSrc: string | undefined;
}

const ImagePicker = ({ onChange, initialImgSrc }: ProfileimgProps) => {
  const [imgSrc, setImgSrc] = useState<string>("");

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // onChange(event.target.files[0]);
    if (file) {
      const img = new Image();
      const objectURL = URL.createObjectURL(file);
      setImgSrc(objectURL);
      img.src = objectURL;
    }

    request(uploadfile.url, uploadfile.method)
      .setBody(
        {
          file: event.target.files?.[0],
          mode: "single",
        },
        "formData"
      )
      .onSuccess((res) => {
        console.log(res, "res");
        // @ts-ignore
        onChange(res?.data?.url);
      })
      .onFailure((err) => {
        console.log(err);
      })
      .call();
  };

  useEffect(() => {
    if (initialImgSrc) {
      setImgSrc(initialImgSrc);
    }
  }, [initialImgSrc]);

  return (
    <div>
      {/* <p className="text-[#2A2F31] text-[16px] red-regular py-6">Upload Logo</p> */}
      {imgSrc ? (
        <Avatar
          shape="square"
          size={110}
          src={imgSrc}
          onClick={() => setImgSrc("")}
        />
      ) : (
        <div className="pointer mx-auto lg:mx-0 w-[90px]">
          <label>
            <img
              className="mx-auto pb-4 "
              src="/images/img-picker.png"
              alt="Upload icon"
            />
            <input className="!hidden" type="file" onChange={onFileChange} />
          </label>
        </div>
      )}
    </div>
  );
};

export default ImagePicker;
