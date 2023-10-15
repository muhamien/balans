import Layout from '@/Layouts/Layouts';
import JobDetail from '@/components/jobs/JobDetail';
import { useRouter } from 'next/router';
import React from 'react'

export default function myJobPostDetail() {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>
            <Layout>
                <div className='container mx-auto px-48 my-8'>
                    <JobDetail/>
                </div>
            </Layout>
        </div>
    )
}
