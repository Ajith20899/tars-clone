
// import { getPlaiceholder } from "plaiceholder";

// import { promises as fsPromises } from 'fs';

export function isLocalUrl(url: string) {
  // Regular expression to match local URLs (relative or absolute paths without a protocol)
  const localUrlPattern = /^(\/|\.\.?\/)/;

  // Regular expression to match remote URLs (start with a protocol like http, https, ftp, etc.)
  const remoteUrlPattern = /^(https?:\/\/|ftp:\/\/|sftp:\/\/|file:\/\/)/;

  if (localUrlPattern.test(url)) {
    return true; // URL is local
  } else if (remoteUrlPattern.test(url)) {
    return false; // URL is remote
  } else {
    return false; // Invalid or unsupported URL format (treat as remote)
  }
}

// export async function LocalImage(src: string) {
//   try {
//     const file = await fsPromises.readFile(`./public${src}`);

//     const { base64 } = await getPlaiceholder(file);

//     console.log(base64);
//     return {
//       error: "",
//       src: base64,
//     };
//   } catch (err) {
//     return {
//       error: err,
//       src: "",
//     };
//   }
// }

// export async function RemoteImage(src: string) {
//   try {
//     const buffer = await fetch(src).then(async (res) =>
//       Buffer.from(await res.arrayBuffer())
//     );

//     const { base64 } = await getPlaiceholder(buffer);

//     console.log(base64);
//     return {
//       error: "",
//       src: base64,
//     };
//   } catch (err) {
//     return {
//       error: err,
//       src: "",
//     };
//   }
// }
