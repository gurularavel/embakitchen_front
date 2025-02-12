import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { Modal as AntModal } from 'antd'

interface ModalProps {
  title: string
  open: boolean
  onCancel: VoidFunction
  onOk?: VoidFunction
  children: React.ReactNode
  footer?: React.ReactNode | null
  width?: number | string
}

const modalStyles: Readonly<TwClasses> = {
  modalTitle: 'text-xl font-semibold text-primary-1',
  modalContent:
    '[&_.ant-modal-content]:!rounded-none [&_.ant-modal-content]:!border [&_.ant-modal-content]:!border-gray-8',
}
const styles = modalStyles as Readonly<StyleRecord>

export const Modal = ({
  title,
  open,
  onCancel,
  onOk,
  children,
  footer = null,
  width = 600,
}: ModalProps) => {
  return (
    <AntModal
      title={<h2 className={styles.modalTitle}>{title}</h2>}
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      footer={footer}
      width={width}
      centered
      className={twMerge(styles.modalContent)}
    >
      <div className='p-4'>{children}</div>
    </AntModal>
  )
}
