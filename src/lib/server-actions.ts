import { Page } from "@/payload-types";
import { payload } from "./payload"

export type LocaleTypes = "all" | "en" | "fr" | "es" | undefined
export const fetchBlogBySlug = async (
    slug: string,
    locale: LocaleTypes
) => {
    const { docs: [blog] } = await payload.find({
        collection: 'blogs',
        locale,
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


export const fetchPage = async (
    slug: Page['slug'],
    locale: LocaleTypes
) => {
    const page = await payload.find({
        collection: 'pages',
        locale,
        where: {
            slug: {
                equals: slug,
            },
        },
    });

    return page
}