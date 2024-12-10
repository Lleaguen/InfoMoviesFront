import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { endpoint, ...params } = req.query;

    const API_URL = process.env.NEXT_PUBLIC_TMDB_API_URL;
    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    if (!API_URL || !API_KEY) {
      return res.status(500).json({ error: 'API_URL or API_KEY is not defined' });
    }

    const url = new URL(`${API_URL}/${endpoint}`);
    url.searchParams.append('api_key', API_KEY as string);

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value as string);
    });

    const response = await fetch(url.toString());
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default handler;
