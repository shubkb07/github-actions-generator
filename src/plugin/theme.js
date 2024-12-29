import { definePreset } from '@primevue/themes'
import Material from '@primevue/themes/material'
const MyPreset = definePreset(Material, {
  primitive: {
    borderRadius: {
      none: '0',
      xs: '2px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
    },
    emerald: {
      50: '#f5fefc',
      100: '#d0fbf2',
      200: '#aaf8e8',
      300: '#85f4de',
      400: '#5ff1d4',
      500: '#3aeeca',
      600: '#31caac',
      700: '#29a78d',
      800: '#20836f',
      900: '#175f51',
      950: '#0f3c33',
    },
    green: {
      50: '#E8F5E9',
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB6A',
      500: '#4CAF50',
      600: '#43A047',
      700: '#388E3C',
      800: '#2E7D32',
      900: '#1B5E20',
      950: '#0e2f10',
    },
    lime: {
      50: '#F9FBE7',
      100: '#F0F4C3',
      200: '#E6EE9C',
      300: '#DCE775',
      400: '#D4E157',
      500: '#CDDC39',
      600: '#C0CA33',
      700: '#AFB42B',
      800: '#9E9D24',
      900: '#827717',
      950: '#413c0c',
    },
    red: {
      50: '#fef4f4',
      100: '#fbcbc8',
      200: '#f9a29c',
      300: '#f67970',
      400: '#f35045',
      500: '#f02719',
      600: '#cc2115',
      700: '#a81b12',
      800: '#84150e',
      900: '#60100a',
      950: '#3c0a06',
    },
    orange: {
      50: '#FFF3E0',
      100: '#FFE0B2',
      200: '#FFCC80',
      300: '#FFB74D',
      400: '#FFA726',
      500: '#FF9800',
      600: '#FB8C00',
      700: '#F57C00',
      800: '#EF6C00',
      900: '#E65100',
      950: '#732900',
    },
    amber: {
      50: '#FFF8E1',
      100: '#FFECB3',
      200: '#FFE082',
      300: '#FFD54F',
      400: '#FFCA28',
      500: '#FFC107',
      600: '#FFB300',
      700: '#FFA000',
      800: '#FF8F00',
      900: '#FF6F00',
      950: '#803800',
    },
    yellow: {
      50: '#FFFDE7',
      100: '#FFF9C4',
      200: '#FFF59D',
      300: '#FFF176',
      400: '#FFEE58',
      500: '#FFEB3B',
      600: '#FDD835',
      700: '#FBC02D',
      800: '#F9A825',
      900: '#F57F17',
      950: '#7b400c',
    },
    teal: {
      50: '#E0F2F1',
      100: '#B2DFDB',
      200: '#80CBC4',
      300: '#4DB6AC',
      400: '#26A69A',
      500: '#009688',
      600: '#00897B',
      700: '#00796B',
      800: '#00695C',
      900: '#004D40',
      950: '#002720',
    },
    cyan: {
      50: '#E0F7FA',
      100: '#B2EBF2',
      200: '#80DEEA',
      300: '#4DD0E1',
      400: '#26C6DA',
      500: '#00BCD4',
      600: '#00ACC1',
      700: '#0097A7',
      800: '#00838F',
      900: '#006064',
      950: '#003032',
    },
    sky: {
      50: '#E1F5FE',
      100: '#B3E5FC',
      200: '#81D4FA',
      300: '#4FC3F7',
      400: '#29B6F6',
      500: '#03A9F4',
      600: '#039BE5',
      700: '#0288D1',
      800: '#0277BD',
      900: '#01579B',
      950: '#012c4e',
    },
    blue: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#2196F3',
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0',
      900: '#0D47A1',
      950: '#072451',
    },
    indigo: {
      50: '#E8EAF6',
      100: '#C5CAE9',
      200: '#9FA8DA',
      300: '#7986CB',
      400: '#5C6BC0',
      500: '#3F51B5',
      600: '#3949AB',
      700: '#303F9F',
      800: '#283593',
      900: '#1A237E',
      950: '#0d123f',
    },
    violet: {
      50: '#EDE7F6',
      100: '#D1C4E9',
      200: '#B39DDB',
      300: '#9575CD',
      400: '#7E57C2',
      500: '#673AB7',
      600: '#5E35B1',
      700: '#512DA8',
      800: '#4527A0',
      900: '#311B92',
      950: '#190e49',
    },
    purple: {
      50: '#F3E5F5',
      100: '#E1BEE7',
      200: '#CE93D8',
      300: '#BA68C8',
      400: '#AB47BC',
      500: '#9C27B0',
      600: '#8E24AA',
      700: '#7B1FA2',
      800: '#6A1B9A',
      900: '#4A148C',
      950: '#250a46',
    },
    fuchsia: {
      50: '#FDE6F3',
      100: '#FBC1E3',
      200: '#F897D1',
      300: '#F56DBF',
      400: '#F34DB2',
      500: '#F12DA5',
      600: '#E0289D',
      700: '#CC2392',
      800: '#B81E88',
      900: '#951777',
      950: '#4b0c3c',
    },
    pink: {
      50: '#FCE4EC',
      100: '#F8BBD0',
      200: '#F48FB1',
      300: '#F06292',
      400: '#EC407A',
      500: '#E91E63',
      600: '#D81B60',
      700: '#C2185B',
      800: '#AD1457',
      900: '#880E4F',
      950: '#440728',
    },
    rose: {
      50: '#FFF0F0',
      100: '#FFD9D9',
      200: '#FFC0C0',
      300: '#FFA7A7',
      400: '#FF8E8E',
      500: '#FF7575',
      600: '#FF5252',
      700: '#FF3838',
      800: '#F71C1C',
      900: '#D50000',
      950: '#3E0000',
    },
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
    zinc: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
    stone: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
      950: '#0c0a09',
    },
  },
  semantic: {
    transitionDuration: '0.2s',
    focusRing: {
      width: '0',
      style: 'none',
      color: 'unset',
      offset: '0',
    },
    disabledOpacity: '0.38',
    iconSize: '1rem',
    anchorGutter: '0',
    primary: {
      50: '#E8F6F1',
      100: '#C5EBE1',
      200: '#9EDFCF',
      300: '#76D3BD',
      400: '#58C9AF',
      500: '#3BBFA1',
      600: '#35AF94',
      700: '#2D9B83',
      800: '#268873',
      900: '#1A6657',
      950: '#0d3329',
    },
    formField: {
      paddingX: '0.75rem',
      paddingY: '0.75rem',
      sm: {
        fontSize: '0.875rem',
        paddingX: '0.625rem',
        paddingY: '0.625rem',
      },
      lg: {
        fontSize: '1.125rem',
        paddingX: '0.825rem',
        paddingY: '0.825rem',
      },
      borderRadius: '{border.radius.sm}',
      focusRing: {
        width: '2px',
        style: 'solid',
        color: '{primary.color}',
        offset: '-2px',
        shadow: 'none',
      },
      transitionDuration: '{transition.duration}',
    },
    list: {
      padding: '0.5rem 0',
      gap: '0',
      header: {
        padding: '0.75rem 1rem',
      },
      option: {
        padding: '0.75rem 1rem',
        borderRadius: '{border.radius.none}',
      },
      optionGroup: {
        padding: '0.75rem 1rem',
        fontWeight: '700',
      },
    },
    content: {
      borderRadius: '{border.radius.sm}',
    },
    mask: {
      transitionDuration: '0.15s',
    },
    navigation: {
      list: {
        padding: '0.5rem 0',
        gap: '0',
      },
      item: {
        padding: '0.75rem 1rem',
        borderRadius: '{border.radius.none}',
        gap: '0.5rem',
      },
      submenuLabel: {
        padding: '0.75rem 1rem',
        fontWeight: '700',
      },
      submenuIcon: {
        size: '0.875rem',
      },
    },
    overlay: {
      select: {
        borderRadius: '{border.radius.sm}',
        shadow:
          '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
      },
      popover: {
        borderRadius: '{border.radius.sm}',
        padding: '1rem',
        shadow:
          '0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)',
      },
      modal: {
        borderRadius: '{border.radius.sm}',
        padding: '1.5rem',
        shadow:
          '0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)',
      },
      navigation: {
        shadow:
          '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
      },
    },
    colorScheme: {
      light: {
        focusRing: {
          shadow: '0 0 1px 4px rgba(0, 123, 255, 0.25)',
        },
        surface: {
          0: '#ffffff',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#0a0a0a',
        },
        primary: {
          color: '#007bff',
          contrastColor: '#ffffff',
          hoverColor: '#0056b3',
          activeColor: '#004085',
        },
        highlight: {
          background: 'rgba(0, 123, 255, 0.1)',
          focusBackground: 'rgba(0, 123, 255, 0.2)',
          color: '#0056b3',
          focusColor: '#004085',
        },
        mask: {
          background: 'rgba(0, 0, 0, 0.5)',
          color: '#e5e7eb',
        },
        formField: {
          background: '#ffffff',
          disabledBackground: '#e5e7eb',
          filledBackground: '#f3f4f6',
          filledHoverBackground: '#e5e7eb',
          filledFocusBackground: '#f3f4f6',
          borderColor: '#9ca3af',
          hoverBorderColor: '#374151',
          focusBorderColor: '#007bff',
          invalidBorderColor: '#dc3545',
          color: '#111827',
          disabledColor: '#6b7280',
          placeholderColor: '#6b7280',
          invalidPlaceholderColor: '#dc3545',
          floatLabelColor: '#6b7280',
          floatLabelFocusColor: '#007bff',
          floatLabelActiveColor: '#6b7280',
          floatLabelInvalidColor: '#dc3545',
          iconColor: '#6b7280',
          shadow: 'none',
        },
        text: {
          color: '#111827',
          hoverColor: '#111827',
          mutedColor: '#6b7280',
          hoverMutedColor: '#6b7280',
        },
        content: {
          background: '#ffffff',
          hoverBackground: '#f3f4f6',
          borderColor: '#d1d5db',
          color: '#111827',
          hoverColor: '#111827',
        },
        overlay: {
          select: {
            background: '#ffffff',
            borderColor: '#ffffff',
            color: '#111827',
          },
          popover: {
            background: '#ffffff',
            borderColor: '#ffffff',
            color: '#111827',
          },
          modal: {
            background: '#ffffff',
            borderColor: '#ffffff',
            color: '#111827',
          },
        },
        list: {
          option: {
            focusBackground: '#f3f4f6',
            selectedBackground: 'rgba(0, 123, 255, 0.1)',
            selectedFocusBackground: 'rgba(0, 123, 255, 0.2)',
            color: '#111827',
            focusColor: '#111827',
            selectedColor: '#0056b3',
            selectedFocusColor: '#004085',
            icon: {
              color: '#6b7280',
              focusColor: '#6b7280',
            },
          },
          optionGroup: {
            background: 'transparent',
            color: '#111827',
          },
        },
        navigation: {
          item: {
            focusBackground: '#f3f4f6',
            activeBackground: '#e5e7eb',
            color: '#111827',
            focusColor: '#111827',
            activeColor: '#111827',
            icon: {
              color: '#6b7280',
              focusColor: '#6b7280',
              activeColor: '#6b7280',
            },
          },
          submenuLabel: {
            background: 'transparent',
            color: '#111827',
          },
          submenuIcon: {
            color: '#6b7280',
            focusColor: '#6b7280',
            activeColor: '#6b7280',
          },
        },
      },
      dark: {
        focusRing: {
          shadow: '0 0 1px 4px rgba(0, 123, 255, 0.25)',
        },
        surface: {
          0: '#1f2937',
          50: '#2d3748',
          100: '#4a5568',
          200: '#718096',
          300: '#a0aec0',
          400: '#cbd5e0',
          500: '#e2e8f0',
          600: '#edf2f7',
          700: '#f7fafc',
          800: '#ffffff',
          900: '#f8fafc',
          950: '#f1f5f9',
        },
        primary: {
          color: '#007bff',
          contrastColor: '#1f2937',
          hoverColor: '#0056b3',
          activeColor: '#004085',
        },
        highlight: {
          background: 'rgba(0, 123, 255, 0.1)',
          focusBackground: 'rgba(0, 123, 255, 0.2)',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
        mask: {
          background: 'rgba(0, 0, 0, 0.6)',
          color: '#e2e8f0',
        },
        formField: {
          background: '#1f2937',
          disabledBackground: '#4a5568',
          filledBackground: '#2d3748',
          filledHoverBackground: '#4a5568',
          filledFocusBackground: '#2d3748',
          borderColor: '#718096',
          hoverBorderColor: '#a0aec0',
          focusBorderColor: '#007bff',
          invalidBorderColor: '#dc3545',
          color: '#ffffff',
          disabledColor: '#cbd5e0',
          placeholderColor: '#cbd5e0',
          invalidPlaceholderColor: '#dc3545',
          floatLabelColor: '#cbd5e0',
          floatLabelFocusColor: '#007bff',
          floatLabelActiveColor: '#cbd5e0',
          floatLabelInvalidColor: '#dc3545',
          iconColor: '#cbd5e0',
          shadow: 'none',
        },
        text: {
          color: '#ffffff',
          hoverColor: '#ffffff',
          mutedColor: '#cbd5e0',
          hoverMutedColor: '#cbd5e0',
        },
        content: {
          background: '#1f2937',
          hoverBackground: '#2d3748',
          borderColor: '#4a5568',
          color: '#ffffff',
          hoverColor: '#ffffff',
        },
        overlay: {
          select: {
            background: '#1f2937',
            borderColor: '#1f2937',
            color: '#ffffff',
          },
          popover: {
            background: '#1f2937',
            borderColor: '#1f2937',
            color: '#ffffff',
          },
          modal: {
            background: '#1f2937',
            borderColor: '#1f2937',
            color: '#ffffff',
          },
        },
        list: {
          option: {
            focusBackground: '#2d3748',
            selectedBackground: 'rgba(0, 123, 255, 0.1)',
            selectedFocusBackground: 'rgba(0, 123, 255, 0.2)',
            color: '#ffffff',
            focusColor: '#ffffff',
            selectedColor: '#007bff',
            selectedFocusColor: '#0056b3',
            icon: {
              color: '#cbd5e0',
              focusColor: '#cbd5e0',
            },
          },
          optionGroup: {
            background: 'transparent',
            color: '#cbd5e0',
          },
        },
        navigation: {
          item: {
            focusBackground: '#2d3748',
            activeBackground: '#4a5568',
            color: '#ffffff',
            focusColor: '#ffffff',
            activeColor: '#ffffff',
            icon: {
              color: '#cbd5e0',
              focusColor: '#cbd5e0',
              activeColor: '#cbd5e0',
            },
          },
          submenuLabel: {
            background: 'transparent',
            color: '#cbd5e0',
          },
          submenuIcon: {
            color: '#cbd5e0',
            focusColor: '#cbd5e0',
            activeColor: '#cbd5e0',
          },
        },
      },
    },
  },
})

export default MyPreset
