import { payload } from "./payload"

export const fetchBlogBySlug = async (slug: string) => {
    const { docs: [blog] } = await payload.find({
        collection: 'blogs',
        where: {
            slug: {
                equals: slug
            },
            _status: {
                equals: 'published',
            },
        },
        limit: 1
    });

    return blog
}