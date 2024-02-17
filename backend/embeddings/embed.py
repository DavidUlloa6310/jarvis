from langchain_experimental.open_clip import OpenCLIPEmbeddings


MODEL = "ViT-B-32"
CHECKPOINT = "laion2b_s34b_b79k"
clip_embd = OpenCLIPEmbeddings(MODEL, CHECKPOINT)


def split_image(masks, image):
    sub_images = []
    for pred in masks:
        boundary = pred['bbox']
        x, y, w, h = [int(v) for v in boundary]
        sub_images.append(image[y:y+h, x:x+w])
    return sub_images


def embed_image(image):
    return clip_embd.embed_image([image]) # Should be URI


def embed_text(text):
    return clip_embd.embed_documents([text])