function status(request, response) {
  response.status(200).json({ chave: "Site saudável." });
}

export default status;
