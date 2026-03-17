import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hrbyjoescdrhnpumswrh.supabase.co'
const supabaseKey = 'sb_publishable_drzHQn2Qt2GpYwQ398hJtQ_dYHM2f1F'

export const supabase = createClient(supabaseUrl, supabaseKey)