"use client"
import { useState } from "react"
import type { Key } from "react-aria-components"
import { ComboBox } from "ui"

export const COUNTRIES = [
  { id: "AF", name: "Afghanistan", flag: "🇦🇫", number: "+93" },
  { id: "AL", name: "Albania", flag: "🇦🇱", number: "+355" },
  { id: "DZ", name: "Algeria", flag: "🇩🇿", number: "+213" },
  { id: "AD", name: "Andorra", flag: "🇦🇩", number: "+376" },
  { id: "AO", name: "Angola", flag: "🇦🇴", number: "+244" },
  { id: "AR", name: "Argentina", flag: "🇦🇷", number: "+54" },
  { id: "AM", name: "Armenia", flag: "🇦🇲", number: "+374" },
  { id: "AU", name: "Australia", flag: "🇦🇺", number: "+61" },
  { id: "AT", name: "Austria", flag: "🇦🇹", number: "+43" },
  { id: "AZ", name: "Azerbaijan", flag: "🇦🇿", number: "+994" },
  { id: "BH", name: "Bahrain", flag: "🇧🇭", number: "+973" },
  { id: "BD", name: "Bangladesh", flag: "🇧🇩", number: "+880" },
  { id: "BY", name: "Belarus", flag: "🇧🇾", number: "+375" },
  { id: "BE", name: "Belgium", flag: "🇧🇪", number: "+32" },
  { id: "BZ", name: "Belize", flag: "🇧🇿", number: "+501" },
  { id: "BJ", name: "Benin", flag: "🇧🇯", number: "+229" },
  { id: "BR", name: "Brazil", flag: "🇧🇷", number: "+55" },
  { id: "BN", name: "Brunei", flag: "🇧🇳", number: "+673" },
  { id: "BG", name: "Bulgaria", flag: "🇧🇬", number: "+359" },
  { id: "KH", name: "Cambodia", flag: "🇰🇭", number: "+855" },
  { id: "CM", name: "Cameroon", flag: "🇨🇲", number: "+237" },
  { id: "CA", name: "Canada", flag: "🇨🇦", number: "+1" },
  { id: "CN", name: "China", flag: "🇨🇳", number: "+86" },
  { id: "CO", name: "Colombia", flag: "🇨🇴", number: "+57" },
  { id: "CG", name: "Congo", flag: "🇨🇬", number: "+242" },
  { id: "CR", name: "Costa Rica", flag: "🇨🇷", number: "+506" },
  { id: "HR", name: "Croatia", flag: "🇭🇷", number: "+385" },
  { id: "CU", name: "Cuba", flag: "🇨🇺", number: "+53" },
  { id: "CY", name: "Cyprus", flag: "🇨🇾", number: "+357" },
  { id: "CZ", name: "Czech Republic", flag: "🇨🇿", number: "+420" },
  { id: "DK", name: "Denmark", flag: "🇩🇰", number: "+45" },
  { id: "EC", name: "Ecuador", flag: "🇪🇨", number: "+593" },
  { id: "EG", name: "Egypt", flag: "🇪🇬", number: "+20" },
  { id: "SV", name: "El Salvador", flag: "🇸🇻", number: "+503" },
  { id: "EE", name: "Estonia", flag: "🇪🇪", number: "+372" },
  { id: "ET", name: "Ethiopia", flag: "🇪🇹", number: "+251" },
  { id: "FJ", name: "Fiji", flag: "🇫🇯", number: "+679" },
  { id: "FI", name: "Finland", flag: "🇫🇮", number: "+358" },
  { id: "FR", name: "France", flag: "🇫🇷", number: "+33" },
  { id: "DE", name: "Germany", flag: "🇩🇪", number: "+49" },
  { id: "GH", name: "Ghana", flag: "🇬🇭", number: "+233" },
  { id: "GR", name: "Greece", flag: "🇬🇷", number: "+30" },
  { id: "HK", name: "Hong Kong", flag: "🇭🇰", number: "+852" },
  { id: "HU", name: "Hungary", flag: "🇭🇺", number: "+36" },
  { id: "IS", name: "Iceland", flag: "🇮🇸", number: "+354" },
  { id: "IN", name: "India", flag: "🇮🇳", number: "+91" },
  { id: "ID", name: "Indonesia", flag: "🇮🇩", number: "+62" },
  { id: "IR", name: "Iran", flag: "🇮🇷", number: "+98" },
  { id: "IQ", name: "Iraq", flag: "🇮🇶", number: "+964" },
  { id: "IE", name: "Ireland", flag: "🇮🇪", number: "+353" },
  { id: "IL", name: "Israel", flag: "🇮🇱", number: "+972" },
  { id: "IT", name: "Italy", flag: "🇮🇹", number: "+39" },
  { id: "JP", name: "Japan", flag: "🇯🇵", number: "+81" },
  { id: "JO", name: "Jordan", flag: "🇯🇴", number: "+962" },
  { id: "KZ", name: "Kazakhstan", flag: "🇰🇿", number: "+7" },
  { id: "KE", name: "Kenya", flag: "🇰🇪", number: "+254" },
  { id: "KR", name: "Korea, South", flag: "🇰🇷", number: "+82" },
  { id: "KW", name: "Kuwait", flag: "🇰🇼", number: "+965" },
  { id: "LV", name: "Latvia", flag: "🇱🇻", number: "+371" },
  { id: "LB", name: "Lebanon", flag: "🇱🇧", number: "+961" },
  { id: "LY", name: "Libya", flag: "🇱🇾", number: "+218" },
  { id: "LT", name: "Lithuania", flag: "🇱🇹", number: "+370" },
  { id: "LU", name: "Luxembourg", flag: "🇱🇺", number: "+352" },
  { id: "MO", name: "Macao", flag: "🇲🇴", number: "+853" },
  { id: "MY", name: "Malaysia", flag: "🇲🇾", number: "+60" },
  { id: "MV", name: "Maldives", flag: "🇲🇻", number: "+960" },
  { id: "MT", name: "Malta", flag: "🇲🇹", number: "+356" },
  { id: "MX", name: "Mexico", flag: "🇲🇽", number: "+52" },
  { id: "MC", name: "Monaco", flag: "🇲🇨", number: "+377" },
  { id: "MN", name: "Mongolia", flag: "🇲🇳", number: "+976" },
  { id: "ME", name: "Montenegro", flag: "🇲🇪", number: "+382" },
  { id: "MA", name: "Morocco", flag: "🇲🇦", number: "+212" },
  { id: "NP", name: "Nepal", flag: "🇳🇵", number: "+977" },
  { id: "NL", name: "Netherlands", flag: "🇳🇱", number: "+31" },
  { id: "NZ", name: "New Zealand", flag: "🇳🇿", number: "+64" },
  { id: "NG", name: "Nigeria", flag: "🇳🇬", number: "+234" },
  { id: "NO", name: "Norway", flag: "🇳🇴", number: "+47" },
  { id: "OM", name: "Oman", flag: "🇴🇲", number: "+968" },
  { id: "PK", name: "Pakistan", flag: "🇵🇰", number: "+92" },
  { id: "PA", name: "Panama", flag: "🇵🇦", number: "+507" },
  { id: "PG", name: "Papua New Guinea", flag: "🇵🇬", number: "+675" },
  { id: "PY", name: "Paraguay", flag: "🇵🇾", number: "+595" },
  { id: "PE", name: "Peru", flag: "🇵🇪", number: "+51" },
  { id: "PH", name: "Philippines", flag: "🇵🇭", number: "+63" },
  { id: "PL", name: "Poland", flag: "🇵🇱", number: "+48" },
  { id: "PT", name: "Portugal", flag: "🇵🇹", number: "+351" },
  { id: "QA", name: "Qatar", flag: "🇶🇦", number: "+974" },
  { id: "RO", name: "Romania", flag: "🇷🇴", number: "+40" },
  { id: "RU", name: "Russia", flag: "🇷🇺", number: "+7" },
  { id: "SA", name: "Saudi Arabia", flag: "🇸🇦", number: "+966" },
  { id: "SN", name: "Senegal", flag: "🇸🇳", number: "+221" },
  { id: "RS", name: "Serbia", flag: "🇷🇸", number: "+381" },
  { id: "SG", name: "Singapore", flag: "🇸🇬", number: "+65" },
  { id: "SK", name: "Slovakia", flag: "🇸🇰", number: "+421" },
  { id: "SI", name: "Slovenia", flag: "🇸🇮", number: "+386" },
  { id: "ZA", name: "South Africa", flag: "🇿🇦", number: "+27" },
  { id: "ES", name: "Spain", flag: "🇪🇸", number: "+34" },
  { id: "LK", name: "Sri Lanka", flag: "🇱🇰", number: "+94" },
  { id: "SE", name: "Sweden", flag: "🇸🇪", number: "+46" },
  { id: "CH", name: "Switzerland", flag: "🇨🇭", number: "+41" },
  { id: "TW", name: "Taiwan", flag: "🇹🇼", number: "+886" },
  { id: "TJ", name: "Tajikistan", flag: "🇹🇯", number: "+992" },
  { id: "TH", name: "Thailand", flag: "🇹🇭", number: "+66" },
  { id: "TN", name: "Tunisia", flag: "🇹🇳", number: "+216" },
  { id: "TR", name: "Turkey", flag: "🇹🇷", number: "+90" },
  { id: "TM", name: "Turkmenistan", flag: "🇹🇲", number: "+993" },
  { id: "UA", name: "Ukraine", flag: "🇺🇦", number: "+380" },
  { id: "AE", name: "United Arab Emirates", flag: "🇦🇪", number: "+971" },
  { id: "GB", name: "United Kingdom", flag: "🇬🇧", number: "+44" },
  { id: "US", name: "United States", flag: "🇺🇸", number: "+1" },
  { id: "UY", name: "Uruguay", flag: "🇺🇾", number: "+598" },
  { id: "UZ", name: "Uzbekistan", flag: "🇺🇿", number: "+998" },
  { id: "VE", name: "Venezuela", flag: "🇻🇪", number: "+58" },
  { id: "VN", name: "Vietnam", flag: "🇻🇳", number: "+84" },
  { id: "YE", name: "Yemen", flag: "🇾🇪", number: "+967" },
  { id: "ZM", name: "Zambia", flag: "🇿🇲", number: "+260" },
  { id: "ZW", name: "Zimbabwe", flag: "🇿🇼", number: "+263" },
]

interface InputPhoneProps {
  value?: Key | null
  onChange?: (key: Key | null) => void
  label?: string
  placeholder?: string
  isRequired?: boolean
}

export function InputPhone({ value = null, onChange }: InputPhoneProps) {
  const [selectedKey, setSelectedKey] = useState<Key | null>(value)

  return (
    <ComboBox
      className="w-[100px]"
      label="Users"
      isRequired
      selectedKey={selectedKey}
      onSelectionChange={(key) => {
        setSelectedKey(key)
        onChange?.(key)
      }}
    >
      <ComboBox.Input disabled />

      <ComboBox.List items={COUNTRIES} className="min-w-3xs">
        {(item) => (
          <ComboBox.Option id={item.id} textValue={`${item.flag} (${item.number})`}>
            <ComboBox.Label>{`${item.flag} ${item.name} (${item.number})`}</ComboBox.Label>
          </ComboBox.Option>
        )}
      </ComboBox.List>
    </ComboBox>
  )
}
