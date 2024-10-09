import { CampaignEntry } from '~ek/types'

export function CampaignItem({
  title,
  img,
  startDate,
  endDate,
}: Readonly<Omit<CampaignEntry, 'description'>>): React.ReactElement {
  return (
    <div>
      <p>CampaignItem</p>
    </div>
  )
}
