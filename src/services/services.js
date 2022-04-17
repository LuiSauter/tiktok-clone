import { supabase } from './supabase'

export const getVideos = async () => {
  const { data: Videos, error } = await supabase
    .from('Videos')
    .select(`*, user:user_id (
        avatar,
        username,
        id
      )`)
  return [error, Videos]
}
