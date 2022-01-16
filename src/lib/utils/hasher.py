import os
import blurhash
import json

imageHashes = {}
imageSRCs = os.listdir('../assets')

for imageSRC in imageSRCs:
    if imageSRC[-3:] == "svg":
        continue
    with open("../assets/" + imageSRC, 'rb') as image_file:
       hash = blurhash.encode(image_file,x_components=4, y_components=3)
    imageHashes[imageSRC] = hash

print(imageHashes)

with open('./hashes.json', 'w') as outfile:
    json.dump(imageHashes, outfile)