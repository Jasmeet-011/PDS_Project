import React from 'react'
import Card from './Card'
const HomeCards = () => {
	return (
		
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
         
					<Card>
					<h2 className="text-2xl font-bold">For Staff</h2>
            <p className="mt-2 mb-4">
              Browse the products in which you are interested
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Products
            </a>
					</Card>
          <Card bg='bg-indigo-100'>
					<h2 className="text-2xl font-bold">For Donators</h2>
            <p className="mt-2 mb-4">
              Donate Products for the needy
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Product
            </a>
					</Card>
        </div>
      </div>
    </section>
	)
}

export default HomeCards