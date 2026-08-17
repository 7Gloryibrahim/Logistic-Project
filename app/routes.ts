import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
             route("AboutUs", "welcome/AboutUs.tsx"),
] satisfies RouteConfig;


