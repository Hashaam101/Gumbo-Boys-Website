import Image from 'next/image';
import ReviewCard from './ReviewCard';
// For BG Pattern
// import pattern from "@/../public/Svgs/BG Pattern.svg";
import ThemeButton from './ThemeBtn';
import ReviewPopup from './ReviewPopup';
import { useState } from 'react';

// Google review URL used in both Reviews and ReviewPopup
export const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJF69duAdtdkgRWGtA5_bwbtI";

const Reviews = () => {
    const [showPopup, setShowPopup] = useState(false);

    // Handles rating and feedback logic
    const handleReviewSubmit = (rating: number, feedback?: string) => {
        // Do not close the popup here; let ReviewPopup handle it after showing confirmation
        if (rating >= 4) {
            // Redirect to Google review page (cannot pre-select stars due to Google limitations)
            window.open(GOOGLE_REVIEW_URL, '_blank');
        }
    };

    return (
        <div className="relative"
            style={{
                overflow: "hidden",
                minHeight: '644px',
                alignSelf: "stretch",
                borderRadius: "36px",
                background: "var(--primary-dark)",
            }}
        >
            <div className="absolute h-full w-full bg-primary-dark -z-20">
                <div
                    className="absolute inset-0 w-full h-full opacity-10"
                    style={{
                        backgroundImage: `
                            url('/Svgs/Fleur-de-lis-filled.svg'), 
                            url('/Svgs/Fleur-de-lis-filled.svg')
                        `,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '120px 120px',
                        backgroundPosition: '0 0, 60px 60px',
                    }}
                />
            </div>

            <div className='py-[46px] px-[15px] sm:py-[76px] sm:px-[52px]'
                style={{
                    display: 'flex',
                    width: '',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '42px',
                }}
            >

                <div>
                    <div className="text-center text-h2 sm:text-h3 md:text-h2 text-white w-full">
                        What our Customers are Saying
                    </div>

                    <div
                        className="sm:text-normal1 md:text-h5 w-full text-center font-medium mt-[20px]"
                        style={{ color: 'color-mix(in oklab, var(--color-white) 50%, transparent)' }}
                    >
                        Here are some reviews from our <a href='https://maps.app.goo.gl/1PtPGhkGc5cPMqbm9' target='_blank' rel='noopener noreferrer' className='hover:underline font-bold text-white/80'>Google Maps</a>!
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <ReviewCard
                        starCount={5}
                        reviewText="As a Lousiana girl I can’t wait to try more of what they offer. Red beans and rice slapped and really hit the spot.. "
                        reviewerName="Alicia Phillips"
                        redirect='#'
                        profileImage="https://lh3.googleusercontent.com/a/ACg8ocJ2aaQFht3Pf9g7ZQ0FoK5LUNUIHKjetjsRZRaJ6mmkCkepWA=s64-c-rp-mo-br100"
                    />

                    <ReviewCard
                        starCount={5}
                        reviewText="As a first time customer, I knew this spot was fire when many customers made line to order. Small spot in DTLA, but enough outdoor seating to wait while the chefs are busy at their craft."
                        reviewerName="Diamond Doom"
                        redirect="#"
                        profileImage="https://lh3.googleusercontent.com/a-/ALV-UjU9_NwtsgqsVEkxm-UU3As7RjVnVWJ38Gm2UJjKK3nHoN6WzPh3=s64-c-rp-mo-br100"
                    />

                    <ReviewCard
                        starCount={5}
                        reviewText="The prices are reasonable and the food is well seasoned. I feel like I am at home in Louisiana. Portions are big as well. I highly recommend this place."
                        reviewerName="Marr"
                        redirect='#'
                        profileImage="https://lh3.googleusercontent.com/a-/ALV-UjWkiplcIP5BtPY9mzaDr9xIUnEYhxdQanjIzelTcU_CdFQOSTU=s64-c-rp-mo-br100"
                    />

                </div>

                <div className='z-10'>
                    <ThemeButton
                        text="Give us a review"
                        textClassname="pr-[8px] pl-[14px]"
                        textColor="text-white"
                        className="bg-[#111] border-[#111] hover:border-[#111] hover:bg-[#111]/90 backdrop-blur-[5.7px]"
                        iconBgColor="bg-primary"
                        iconBgHoverColor="bg-primary-dark"
                        iconColor="text-white"
                        iconHoverColor="text-white"
                        onClick={() => setShowPopup(true)}
                    />
                </div>
                {showPopup && (
                    <ReviewPopup
                        onClose={() => setShowPopup(false)}
                        onSubmit={handleReviewSubmit}
                    />
                )}

            </div>
        </div>
    );
};

export default Reviews;