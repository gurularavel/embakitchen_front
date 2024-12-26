'use client'

import * as React from 'react'
import { Button, Icon } from '~ek/components'
import { useStore } from '~ek/hooks'
import { changePassword } from '~ek/services'
import type { ChangePasswordFormValues } from '~ek/types'

interface TabHeader {
  label: string
  component: React.ReactElement
}

const profileStyles: Readonly<TwClasses> = {
  container: 'px-4 py-6',
  wrapper: 'flex flex-col laptop:flex-row gap-y-6 gap-x-10',
  aside: 'border border-solid border-gray-9',
  asideHeader:
    'flex items-center gap-x-2 p-6 capitalize border-b border-solid border-gray-9',
  profileIcon: 'w-8 h-8',
  tabHeader: 'p-6',
  tabHeaderItem: (isActive: unknown) =>
    `h-14 flex items-center mb-5 last:mb-0 cursor-pointer text-base font-medium px-6 py-4 ${(isActive as boolean) ? 'bg-primary-9 text-primary-1' : 'bg-white text-tertiary-3'}`,
  tabContent: '',
  sectionTitle: 'text-2xl leading-9 text-primary-1 font-semibold mb-6',
  form: 'w-[520px] flex flex-col gap-y-5',
  double: 'flex gap-x-4 [&_div]:flex-1',
  inputGroup: 'flex flex-col gap-y-1',
  label: 'text-xs font-medium text-gray-1',
  input:
    'inline-block w-full h-14 px-4 text-gray-6 rounded border border-solid border-gray-8',
  submitButton: 'w-full h-14 bg-primary-1 text-white rounded-md',
}
const styles = profileStyles as Readonly<StyleRecord>
const getTabHeaderItemStyles = profileStyles.tabHeaderItem as StyleGetter

const tabHeaders: TabHeader[] = [
  { label: 'Hesab məlumatları', component: <ProfileInformation /> },
  { label: 'Şifrəni dəyiş', component: <ChangePassword /> },
  { label: 'Ünvanlar', component: <Addresses /> },
  { label: 'Sifariş tarixçəsi', component: <OrderHistory /> },
  { label: 'Kredit ödənişi', component: <CreditPayment /> },
  { label: 'Öz dizaynını yarat', component: <CreateYourDesign /> },
]

export function Profile(): React.ReactElement {
  const [activeTav, setActiveTab] = React.useState<number>(0)
  const { user } = useStore(state => state.authSlice)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <aside className={styles.aside}>
          <h4 className={styles.asideHeader}>
            <Icon
              variant='profile-dark'
              sizes=''
            />
            {user?.name} {user?.surname}
          </h4>

          <ul className={styles.tabHeader}>
            {tabHeaders.map((header: TabHeader, i: number) => (
              <li
                key={header.label}
                onClick={() => setActiveTab(i)}
                className={getTabHeaderItemStyles(i === activeTav)}
              >
                {header.label}
              </li>
            ))}
          </ul>
        </aside>

        <div className={styles.tabContent}>
          {tabHeaders[activeTav].component}
        </div>
      </div>
    </div>
  )
}

function ProfileInformation(): React.ReactElement {
  const { user } = useStore(state => state.authSlice)

  return (
    <>
      <h4 className={styles.sectionTitle}>Hesab məlumatları</h4>

      <form className={styles.form}>
        <div className={styles.double}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Ad</label>
            <input
              type='text'
              name='name'
              placeholder='Ad'
              className={styles.input}
              value={user?.name}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Soyad</label>
            <input
              type='text'
              name='surname'
              placeholder='Soyad'
              className={styles.input}
              value={user?.surname}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            className={styles.input}
            value={user?.email}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Mobil nömrə</label>
          <input
            type='tel'
            name='phone'
            placeholder='Mobil nömrə'
            className={styles.input}
            value={user?.phone}
          />
        </div>

        <div>
          <Button
            type='submit'
            classes={styles.submitButton}
          >
            Giriş
          </Button>
        </div>
      </form>
    </>
  )
}

function ChangePassword(): React.ReactElement {
  const changePasswordHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const values = Array.from(e.currentTarget.elements)
      .filter(elem => !!elem.getAttribute('name'))
      .map(elem => elem.getAttribute('name'))
      .reduce(
        (res, elem) => ({
          ...res,
          [elem as string]: formData.get(elem as string),
        }),
        {},
      ) as ChangePasswordFormValues

    const { password, password_confirmation } = values

    if (password !== password_confirmation) {
      return
    }

    await changePassword(values)
  }

  return (
    <>
      <h4 className={styles.sectionTitle}>Hesab məlumatları</h4>

      <form
        className={styles.form}
        onSubmit={changePasswordHandler}
      >
        <div className={styles.inputGroup}>
          <label className={styles.label}>Şifrə</label>
          <input
            type='password'
            name='password'
            placeholder='Şifrə'
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Şifrə (təkrar)</label>
          <input
            type='password'
            name='password_confirmation'
            placeholder='Şifrə (təkrar)'
            className={styles.input}
          />
        </div>

        <div>
          <Button
            type='submit'
            classes={styles.submitButton}
          >
            Giriş
          </Button>
        </div>
      </form>
    </>
  )
}

function Addresses(): React.ReactElement {
  return <div>Addresses</div>
}

function OrderHistory(): React.ReactElement {
  return <div>OrderHistory</div>
}

function CreditPayment(): React.ReactElement {
  return <div>CreditPayment</div>
}

function CreateYourDesign(): React.ReactElement {
  return <div>CreateYourDesign</div>
}
