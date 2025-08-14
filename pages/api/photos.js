import axios from "axios"

export default async function handler(req, res) {
  try {
    const results = await getAlbum(process.env.GOOGLE_PHOTOS_ALBUM_KEY);
    res.status(200).json({ results })
  } catch (e) {
    res.status(500)
  }
}

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9\-_]*)"/g;

function extractPhotos(content) {
  const links = new Set()
  let match
  while ((match = regex.exec(content))) {
    links.add(match[1]);
  }
  return Array.from(links)
}

async function getAlbum(id) {
  try {
    const response = await axios.get(`https://photos.app.goo.gl/${id}`)
    return extractPhotos(response.data);
  } catch (e) {
    return null;
  }
}