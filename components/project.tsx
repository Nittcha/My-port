"use client";

import { useSectionInView } from '@/lib/hook';
import React from 'react'

export default function Projects() {
    const { ref } = useSectionInView("Projects");

    return (
        <div ref={ref} id="projects">projects</div>
    );
}