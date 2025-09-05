import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9\-_]*)"/g;

function extractPhotos(content: string): string[] {
  const links = new Set<string>();
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content))) {
    links.add(match[1]);
  }
  return Array.from(links);
}

async function getAlbum(id: string | undefined): Promise<string[] | null> {
  if (!id) return null;
  try {
    const response = await axios.get<string>(`https://photos.app.goo.gl/${id}`);
    return extractPhotos(response.data);
  } catch (e) {
    return null;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const results = await getAlbum(process.env.GOOGLE_PHOTOS_ALBUM_KEY);
    res.status(200).json({ results });
  } catch (e) {
    res.status(500).end();
  }
}