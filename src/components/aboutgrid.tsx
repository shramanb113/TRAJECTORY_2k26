"use client";

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  NutIcon,
} from "lucide-react";
import { Card, Grid } from "@/components/grid_setup";

function About() {
  const features = [
    {
      Icon: FileTextIcon,
      name: "About Trajectory",
      description: `Welcome to Trajectory 2025, the premier event for mechanical engineering enthusiasts and professionals! This event is designed to bring together the brightest minds in the field to showcase innovations, share knowledge, and inspire the next generation of engineers.\nTrajectory 2025 will feature a variety of activities including hands-on workshops, live demonstrations, keynote speeches by industry leaders, and exciting competitions. Whether you're a seasoned engineer or a curious student, there's something for everyone.Trajectory 2025 will feature a variety of activities including hands-on workshops, live demonstrations, keynote speeches by industry leaders, and exciting competitions. Whether you're a seasoned engineer or a curious student, there's something for everyone.Join us in exploring the latest advancements in sustainable engineering, robotics, and manufacturing. \nTogether, let's shape the future of mechanical engineering.Join us in exploring the latest advancements in sustainable engineering, robotics, and manufacturing. Together, let's shape the future of mechanical engineering.`,
      href: "/",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: NutIcon,
      name: "Highlights of Trajectory 2k26",
      description: "Search through all your files in one place.",
      href: "/",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Multilingual",
      description: "Supports 100+ languages and counting.",
      href: "/",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      description:
        "Get notified when someone shares a file or mentions you in a comment.",
      href: "/",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  return (
    <Grid className="lg:grid-rows-3">
      {features.map((feature) => (
        <Card key={feature.name} {...feature} />
      ))}
    </Grid>
  );
}

export default About;