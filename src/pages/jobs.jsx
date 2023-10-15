import Layout from '@/Layouts/Layouts'
import JobList from '@/components/jobs/JobList'
import React from 'react'

export default function jobs() {
  return (
    <div>
        <Layout>
            <div className='container mx-auto px-48 my-8'>
                <JobList type="jobList" listName="Pekerjaan Terbaru" hasRefresh={true}/>
            </div>
        </Layout>
    </div>
  )
}
