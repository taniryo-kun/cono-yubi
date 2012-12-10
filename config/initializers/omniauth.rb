Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, "411286712247085", "1af04ea073ab80331de73944ec49fc4e", {:scope => "read_friendlists, offline_access, read_requests"}
end