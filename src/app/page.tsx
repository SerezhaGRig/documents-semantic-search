import HomeClient from "@/components/HomeClient";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const dynamic = "force-dynamic";

export default async function Home() {
  const sst = await import("sst");

  const bucketName = sst.Resource["document-semantic-search-dev"].name;

  const command = new PutObjectCommand({
    Key: crypto.randomUUID(),
    Bucket: bucketName,
  });

  const signedUrl = await getSignedUrl(new S3Client({}), command);

  return <HomeClient signedUrl={signedUrl} />;
}

// export const revalidate = 3600;

// export default function Home() {
//    return <HomeClient/>;

// }