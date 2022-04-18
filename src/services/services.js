import { supabase } from './supabase'

export const getVideos = async () => {
  const { data: Videos, error } = await supabase
    .from('Videos')
    .select(`*, user:user_id (
        avatar,
        username,
        id
      )`)
    .order('id', { ascending: false })
  return [error, Videos]
}

// export const uploadVideo = () => {
// }
