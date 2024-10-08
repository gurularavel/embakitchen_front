// import Image from 'next/image'
// import { CampaignItem } from '@embakitchen/components'
// import campaignSectionBg from '/public/assets/images/campaigns_section_bg.png'

// export const Campaigns: React.FC = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <div className={styles.titleWrapper}>
//           <h4 className={styles.title}>{campaignsData?.title || ''}</h4>
//           <div className={styles.titleWrapperBg}>
//             <Image
//               src={campaignSectionBg}
//               alt='campaigns section title background'
//               className={styles.titleWrapperBgImg}
//             />
//           </div>
//         </div>

//         <div className={styles.campaigns}>
//           {campaignsData?.campaigns?.map(
//             (campaign: CampaignEntry, i: number) => (
//               <CampaignItem
//                 key={i}
//                 {...campaign}
//               />
//             ),
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }
