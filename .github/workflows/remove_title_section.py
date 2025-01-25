import toml

# Read the contents of the file.
with open("content.toml", "r") as f:
  content = toml.load(f)

# Remove the title section if it is empty.
if content.get("title") == "":
  del content["title"]

# Write the updated content back to the file.
with open("content.toml", "w") as f:
  toml.dump(content, f)
