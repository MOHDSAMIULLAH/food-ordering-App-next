// import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
// import uniqid from "uniqid";

export async function POST(req) {
  let Url=null;
  const data = await req.formData();
  if (data.get("file")) {
    // upload the file
    const file = data.get("file");
    // console.log(file,"file");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "profile");
    formData.append("cloud_name", "dc4gfoeno");
    const resUrl =await fetch("  https://api.cloudinary.com/v1_1/dc4gfoeno/image/upload", {
      method: "post",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        Url= data.url;
        // console.log(data.url, "data.url");
        // console.log(Url, "Url");
        return Url;
      })
      .catch((err) => console.log(err));
  //   // const s3Client = new S3Client({
  //   //   region: 'us-east-1',
  //   //   credentials: {
  //   //     accessKeyId: process.env.MY_AWS_ACCESS_KEY,
  //   //     secretAccessKey: process.env.MY_AWS_SECRET_KEY,
  //   //   },
  //   // });

  //   // const ext = file.name.split('.').slice(-1)[0];
  //   // const newFileName = uniqid() + '.' + ext;

  //   // const chunks = [];
  //   // for await (const chunk of file.stream()) {
  //   //   chunks.push(chunk);
  //   // }
  //   // const buffer = Buffer.concat(chunks);

  //   // const bucket = 'dawid-food-ordering';
  //   // await s3Client.send(new PutObjectCommand({
  //   //   Bucket: bucket,
  //   //   Key: newFileName,
  //   //   ACL: 'public-read',
  //   //   ContentType: file.type,
  //   //   Body: buffer,
  //   // }));

  //   // const link = 'https://'+bucket+'.s3.amazonaws.com/'+newFileName;
    return Response.json(resUrl);
  }
  return Response.json(true);
}
