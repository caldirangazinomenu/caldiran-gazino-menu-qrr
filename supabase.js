const SUPABASE_URL = "https://caldiran-gazino-menu-qrr.vercel.app/admin/admin.html;

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6Y3RneWxtbGZ6a3B6bWFiZHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1NDMwMjEsImV4cCI6MjA5ODExOTAyMX0.X0u47jcQK5AEg8Poa9ZdgXnbkV4xVQ2j0LMgn5-DprE";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
