import React from 'react'
import Hero from '../../components/home/hero/Hero'
import Features from '../../components/home/features/Features'
import Review from '../../components/home/reviews/Review'
import ContactUs from '../../components/home/contact-us/ContactUs'
import Download from '../../components/home/download/Download'

const Home = () => {
	return (
		<>
			<Hero />
			<Features />
			<Review />
			<ContactUs />
			<Download />
		</>
	)
}

export default Home