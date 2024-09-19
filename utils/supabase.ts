import { createClient } from "@supabase/supabase-js";
import { useRuntimeConfig } from "#app";

let supabase: any = null;

export const useSupabase = () => {
  if (supabase) return supabase;

  const config = useRuntimeConfig();
  supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey);

  return supabase;
};
