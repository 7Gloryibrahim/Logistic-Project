import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
             route("AboutUs", "welcome/AboutUs.tsx"),
             route("Project", "routes/Project.tsx"),
             route("Contact", "routes/contact.tsx"),
            route("Page", "routes/page.tsx"),
            route("Testimonials", "routes/Testimonials.tsx"),
            route("BlogDetails", "routes/Blogdetails.tsx"),
            route ("Blog","routes/Blog.tsx")
] satisfies RouteConfig;
