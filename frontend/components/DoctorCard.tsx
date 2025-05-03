'use client';

import Image from 'next/image';
import React from 'react';
import { Doctor } from '../types/doctor';
import { Button } from '../components/ui/button';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="doctor-card border rounded-lg overflow-hidden bg-white mb-4">
      <div className="flex flex-col md:flex-row">
        <div className="p-4 flex md:flex-col items-center justify-center md:w-1/5">
          <div className="w-24 h-24 relative overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src={doctor.profileImage || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACUCAMAAAA9M+IXAAAAMFBMVEXk5ueutLenrrHn6eqrsbTq7O3GyszQ09Xh4+S4vcDJzc/Y29y0ubzV2Nrd4OG7wMNJiBkUAAAD+0lEQVR4nO2b2bIiIQxAG8LabP//t0OrY+m9TstmgjWcJx9PYSB0ErZtsVgsFovFYrFYLBaLRQcgJRgXMnHLP6l1zoDNBOX5HWGVM9ucyiCdTowL9ojgXmkzobA0yotn15ux8MpIar0fmPTS9e8aq5lCAsx+InsRZnoaYensuexFOMU5fEG/l70scJjCV/ES2wzfqVUzqWhtr76Ken2hwjYHBLVvlW1e30QpC6rO9ohfuowh91rbHA9k5wO4etuMI/I1vsVWWBrb+sC9+dKEb1soZLghsJW+VZcl/OiFUJp7X0BwOjTtsysCPVmAbrfNvg7btzL7/tDFvjvEnsXNvsi6umOjZbhG9YWCz51TEm6q6FvcHA2Ysl2H7pWAqCtTry3DPBtkt61ATcTduswi3nNcv67Hq5JA6NdF/KjouzDcwLuVgeq3FXh5rfWz51kXy3bpLt1H3W5b1K32ZQfZCF3E2tN3JeFt699qmFecL7tAftn1vLA3dQbup/BXfVpu0FEhu2BRP9yhoSvxCHJZpPfk5dgV0+8q6X1bwbSvHI3enYCeGiRBsb8jEVuCRmB7WY9HfNuONqCi6WLHtiarp+gCbs0XHczK7hOyIRzETjcwUjfacrElHW8xlS0V/H7lM7GqkU1tu4Gp8OWJfrLQFMevmGNws3BMT8wwpJeRoSAgBGod5BSI6u1ArJppRhqi5yfCfJZp2DvSWfaPYW6W4mzD3HmBwanfo/KCWRVhsqW9kq2cTsdDBJE5XiL4pKOZU/YGAMSg911rN+mqPgIH8srxk9rnXxyOYGIIOi+tyuzHCgcXjZzuLQ2A0Sr5hx32cEh4q7SbIv0ensbp453PWZ449p1Ie6DddiBN2JMVZwniSdonpan2n5Qh//1vku/vlMHsjv4CKMeAS4WL+tuZex0RYzlng/30ivAWzlJAEoYjCLpbE4L5HUEYNs36m2o3ZfXhp4JZ1ncPvD34iv2TF0vQtu4keC/sP/b9BrF3TvM1+hMnMZgBMxcv4XZ88x1KPh8bEWz4IaGGnQcvhe3ILQd1paUW34F9QRh31J4Iq0FV6hFzTSW+g6rqdmBiOBfuD2Aor9gNoLvfVltvJvZF2GSP8K6Mgby2rPMpJmbc3vDNzXikE+ynb6tt57ueRkRbg7vxWe0A37bWG/o2u9Oy3UgC90JLOqYKhYtvdTh0PKsdQO2AhqQ5Fe74yuUllWWVE529M4Pd1PW68e8Kv3xrcnGgtq1a3vohkA/4lp+9ht6W8eKZnQGj2gPwpTV2aalVD0RpqgBq0yulRy/9uXBQ+rICdmrTK4XvVuQEx9iBLQzeSXQL31y1DY5+gLK95hifg8JEYSahSHbx3/IHKUo6XzoWFt8AAAAASUVORK5CYII="}
              alt={doctor.name}
              fill
              className="object-cover rounded-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACUCAMAAAA9M+IXAAAAMFBMVEXk5ueutLenrrHn6eqrsbTq7O3GyszQ09Xh4+S4vcDJzc/Y29y0ubzV2Nrd4OG7wMNJiBkUAAAD+0lEQVR4nO2b2bIiIQxAG8LabP//t0OrY+m9TstmgjWcJx9PYSB0ErZtsVgsFovFYrFYLBaLRQcgJRgXMnHLP6l1zoDNBOX5HWGVM9ucyiCdTowL9ojgXmkzobA0yotn15ux8MpIar0fmPTS9e8aq5lCAsx+InsRZnoaYensuexFOMU5fEG/l70scJjCV/ES2wzfqVUzqWhtr76Ken2hwjYHBLVvlW1e30QpC6rO9ohfuowh91rbHA9k5wO4etuMI/I1vsVWWBrb+sC9+dKEb1soZLghsJW+VZcl/OiFUJp7X0BwOjTtsysCPVmAbrfNvg7btzL7/tDFvjvEnsXNvsi6umOjZbhG9YWCz51TEm6q6FvcHA2Ysl2H7pWAqCtTry3DPBtkt61ATcTduswi3nNcv67Hq5JA6NdF/KjouzDcwLuVgeq3FXh5rfWz51kXy3bpLt1H3W5b1K32ZQfZCF3E2tN3JeFt699qmFecL7tAftn1vLA3dQbup/BXfVpu0FEhu2BRP9yhoSvxCHJZpPfk5dgV0+8q6X1bwbSvHI3enYCeGiRBsb8jEVuCRmB7WY9HfNuONqCi6WLHtiarp+gCbs0XHczK7hOyIRzETjcwUjfacrElHW8xlS0V/H7lM7GqkU1tu4Gp8OWJfrLQFMevmGNws3BMT8wwpJeRoSAgBGod5BSI6u1ArJppRhqi5yfCfJZp2DvSWfaPYW6W4mzD3HmBwanfo/KCWRVhsqW9kq2cTsdDBJE5XiL4pKOZU/YGAMSg911rN+mqPgIH8srxk9rnXxyOYGIIOi+tyuzHCgcXjZzuLQ2A0Sr5hx32cEh4q7SbIv0ensbp453PWZ449p1Ie6DddiBN2JMVZwniSdonpan2n5Qh//1vku/vlMHsjv4CKMeAS4WL+tuZex0RYzlng/30ivAWzlJAEoYjCLpbE4L5HUEYNs36m2o3ZfXhp4JZ1ncPvD34iv2TF0vQtu4keC/sP/b9BrF3TvM1+hMnMZgBMxcv4XZ88x1KPh8bEWz4IaGGnQcvhe3ILQd1paUW34F9QRh31J4Iq0FV6hFzTSW+g6rqdmBiOBfuD2Aor9gNoLvfVltvJvZF2GSP8K6Mgby2rPMpJmbc3vDNzXikE+ynb6tt57ueRkRbg7vxWe0A37bWG/o2u9Oy3UgC90JLOqYKhYtvdTh0PKsdQO2AhqQ5Fe74yuUllWWVE529M4Pd1PW68e8Kv3xrcnGgtq1a3vohkA/4lp+9ht6W8eKZnQGj2gPwpTV2aalVD0RpqgBq0yulRy/9uXBQ+rICdmrTK4XvVuQEx9iBLQzeSXQL31y1DY5+gLK95hifg8JEYSahSHbx3/IHKUo6XzoWFt8AAAAASUVORK5CYII=";
              }}
              sizes="96px"
            />
          </div>
        </div>

        <div className="p-4 md:flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {doctor.rating && (
                  <div className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">
                    DOCTOR OF THE HOUR
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">{doctor.specialization}</p>
              <div className="flex items-center mt-2 text-sm text-primary font-medium">
                <span>{doctor.experience} YEARS</span>
                <span className="mx-2">•</span>
                <span>{Array.isArray(doctor.specialization) ? doctor.specialization.join(", ") : doctor.specialization}</span>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col items-end">
              <p className="text-xl font-bold">₹{doctor.fee}</p>
            </div>
          </div>

          <div className="mt-3 text-sm text-gray-600">
            <p>{doctor.clinic}</p>
          </div>

          <div className="mt-4 md:flex md:justify-between md:items-center">
            <div className="mb-2 md:mb-0">
              {doctor.availableIn ? (
                <p className="text-sm text-green-600">
                  Available in {doctor.availableIn}
                </p>
              ) : (
                <div className="h-5"></div>
              )}
            </div>

            <Button className="w-full md:w-auto bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200">
  Consult Online
</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
