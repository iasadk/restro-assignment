import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { BlogCard, Blog } from './BlogCard'

export function BlogSlider({ blogs }: { blogs: Blog[] }) {
    return (
        <Carousel
            opts={{ align: 'start' }}
            className="w-full"
        >
            <CarouselContent>
                {blogs.map((blog) => (
                    <CarouselItem
                        key={blog.id}
                        className="basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                        <BlogCard blog={blog} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
