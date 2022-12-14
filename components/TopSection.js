import React from 'react'

const TopSection = ({ homeRef }) => {
    return (
        <div className="text-white pt-20 bg-image1 w-full min-h-screen bg-cover" ref={homeRef}>
            <div className="flex items-center min-h-screen">
                <div className="">
                    <div className="text-4xl text-center w-[1000px] m-auto bg-[#0f1539b8] py-3 px-5">
                        <span className="text-blue-700 text-6xl font-bold">NexPred Solutions</span>  is based on the principal that parts of the human intelligence can be defined in a way that a machine can mimic and execute a predefined task. AI is to provide as near to real-time processed data so a decision can be made, and the actions taken by a human. An end-to-end computer vision or now called “artificial intelligence-based” solution for providing analytics processing live video coming from various camera feeds and their inherent technologies independent or in an aggregate of defined groups.
                    </div>
                    {/* <div className="flex justify-center mt-10"> */}
                        {/* <ul className="list-disc">
                            <li>Multi camera pipeline support</li>
                            <li>Multiple regions of interest (ROI)</li>
                            <li>3D model object detection with multiple regions of “danger zone”
                            </li>
                            <li>Passenger detection and counting occupancy</li>

                        </ul> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default TopSection
