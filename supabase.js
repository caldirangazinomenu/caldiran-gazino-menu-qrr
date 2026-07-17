const SUPABASE_URL = "sb_publishable_jFpQ6EAn8KLDwNgf_2IRrg_jpbeSMFq";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjdHV6YnhuYnFoZG5tcmJ2cmptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0MjkyNjksImV4cCI6MjA5OTAwNTI2OX0.-9wpNXoG1g5YCYEbUgJ63C2vpNfrbg8n6W6gaAgpM4w";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
