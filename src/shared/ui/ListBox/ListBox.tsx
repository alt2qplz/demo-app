import { Fragment, ReactNode, useEffect, useState } from 'react';
import { Listbox as HeadlessListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';
import DoneIcon from 'shared/assets/icons/done-20-20.svg';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: cls.optionsBottom,
  top: cls.optionsTop,
};

export function ListBox(props: ListBoxProps) {
  const { className, items, value, defaultValue, onChange, readonly, direction = 'bottom', label } = props;

  const [selected, setSelected] = useState<ReactNode>(defaultValue);

  useEffect(() => {
    if (value) setSelected(items?.find(el => el.value === value)?.content || defaultValue);
  }, [defaultValue, items, selected, value]);

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="4" className={classNames('', { [cls.readonly]: readonly })}>
      {label && <span>{`${label}>`}</span>}
      <HeadlessListBox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HeadlessListBox.Button disabled={readonly} className={classNames(cls.trigger, {}, [])}>
          {selected}
        </HeadlessListBox.Button>
        <HeadlessListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HeadlessListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled })}>
                  <HStack gap="8">
                    {selected && <DoneIcon className={cls.icon}/>}{item.content}
                  </HStack>
                </li>
              )}
            </HeadlessListBox.Option>
          ))}
        </HeadlessListBox.Options>
      </HeadlessListBox>
    </HStack>
  );
}
