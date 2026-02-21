import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ImageSlider from './components/ImageSlider.jsx'
import Blog from './pages/Blog.jsx'
// Hero background image is now in public folder
import {
  MessageCircle,
  Download,
  Globe,
  Users,
  Award,
  Monitor,
  Tv,
  Grid3x3,
  Cpu,
  GraduationCap,
  ShoppingBag,
  Stethoscope,
  Building,
  MapPin,
  Shield,
  Brain,
  Wrench,
  CheckCircle,
  Mail,
  Phone,
  Share2,
  Wifi,
  PenTool,
  QrCode,
  MousePointer,
  Calendar,
  Star,
  ArrowRight,
  PlayCircle,
  Languages,
  Sun
} from 'lucide-react'
import HmayLogo from './Hmay.png'

// Translation object
const translations = {
  en: {
    // Navigation
    nav: {
      benefits: "Benefits",
      applications: "Applications", 
      products: "Products",
      services: "Services",
      contact: "Contact",
      getQuote: "Get Quote"
    },
    // Hero Section
    hero: {
      distributor: "🇲🇾 Official Malaysia Distributor Tolbao",
      title: "HMAY Smart Displays",
      subtitle: "Professional Interactive Flat Panels & Commercial Displays for Modern Workspaces",
      features: {
        display: "4K Ultra HD Display",
        touch: "20-Point Multi-Touch", 
        os: "Android 12 OS",
        brand: "Fortune 500 Brand"
      },
      whatsappDemo: "WhatsApp Demo",
      downloadBrochure: "Download Brochure",
      productTitle: "HMAY Interactive Flat Panel",
      productSubtitle: "Experience the future of collaboration",
      liveDemo: "Live Demo Available"
    },
    // Benefits Section
    benefits: {
      title: "Interactive Flat Panel Benefits",
      subtitle: "Transform your workspace with cutting-edge collaboration technology",
      multipleScreen: {
        title: "Multiple Screen Sharing",
        desc: "Connect up to 8 devices simultaneously and display 4 screens at once without any cables."
      },
      wireless: {
        title: "Wireless Mirroring", 
        desc: "Share screens wirelessly without physical cables. Eliminate messy cables and connector issues forever."
      },
      whiteboard: {
        title: "Digital Whiteboard",
        desc: "Create ideas, notes, tables, diagrams, and process flows with our advanced digital whiteboard."
      },
      sharing: {
        title: "Effortless Sharing",
        desc: "Share discussion notes, ideas, presentations, and meeting minutes with just a simple QR scan."
      },
      control: {
        title: "Easy Control",
        desc: "Control your computer directly from the HMAY panel without any additional hardware or software."
      },
      brightness: {
        title: "Bright Room Optimized",
        desc: "Room lighting is no longer an issue with our advanced LED backlight technology and anti-glare coating."
      }
    },
    // Applications Section
    applications: {
      title: "Interactive Flat Panel Applications",
      subtitle: "Versatile solutions for every industry and workspace",
      meeting: {
        title: "Smart Meeting Rooms",
        desc1: "Transform meeting rooms with interactive displays, digital whiteboards, and seamless screen sharing for presentations.",
        desc2: "Perfect for remote meetings and conferences between offices and clients worldwide."
      },
      education: {
        title: "Education & Training",
        desc: "Advanced training tools for kindergartens, schools, colleges, universities, and corporate training programs."
      },
      healthcare: {
        title: "Healthcare & Government", 
        desc: "Medical consultations, patient education, telemedicine applications, and government presentation systems."
      }
    },
    // Products Section
    products: {
      title: "HMAY Interactive Flat Panel & Accessories",
      subtitle: "Complete ecosystem of HMAY commercial display solutions",
      interactive: {
        title: "Interactive Panels",
        size: "55″ / 65″ / 75″ / 86″ / 98″"
      },
      tablet: {
        title: "Smart Tablet Pro",
        desc: "Windows & Android Modules"
      },
      stands: {
        title: "Mobile Stands",
        desc: "Adjustable Height Stands"
      },
      wireless: {
        title: "Wireless Sharing",
        desc: "Dongles & Sharing Boxes"
      },
      viewSpecs: "View Specifications"
    },
    // Services Section
    services: {
      title: "Our Professional Services",
      subtitle: "Complete support ecosystem for your interactive display needs",
      sales: {
        title: "Sales & Distribution",
        desc: "Official authorized reseller of HMAY interactive panels and commercial displays in Malaysia."
      },
      support: {
        title: "Support & Maintenance", 
        desc: "Dedicated technical team with specialized training to support all HMAY equipment."
      },
      warranty: {
        title: "Warranty & Parts",
        desc: "Comprehensive warranty support with sufficient spare parts inventory for continuous operation."
      },
      training: {
        title: "Training & Development",
        desc: "Professional training programs and hands-on workshops for internal teams and clients."
      }
    },
    // Slideshow Section
    slideshow: {
      title: "HMAY Interactive Flat Panel"
    },
    // Contact Section
    contact: {
      title: "Book a Live DEMO",
      subtitle: "Experience HMAY Interactive Flat Panels in action",
      whatsappCall: "WhatsApp / Call",
      email: "Email",
      businessHours: "Business Hours",
      hours: "MON-FRI 09:00 - 18:00",
      whatsappDemo: "WhatsApp Demo Request",
      emailInquiry: "Email Inquiry",
      location: "Kuala Lumpur, Malaysia • Official HMAY Technology Distributor"
    },
    // Footer
    footer: {
      company: {
        desc1: "Official Malaysia distributor of HMAY interactive display solutions.",
        desc2: "Transforming workspaces with cutting-edge technology."
      },
      products: {
        title: "Products",
        interactive: "Interactive Flat Panels",
        tablet: "Smart Tablet Pro", 
        commercial: "Commercial Displays",
        wireless: "Wireless Sharing Solutions"
      },
      services: {
        title: "Services",
        sales: "Sales & Distribution",
        installation: "Installation & Setup",
        training: "Training & Support",
        warranty: "Warranty & Maintenance"
      },
      company_links: {
        title: "Company",
        about: "About HMAY",
        clients: "Our Clients", 
        contact: "Contact Us",
        terms: "Terms & Conditions"
      },
      copyright: "© 2024 HMAY Interactive Solutions. All rights reserved. | Official HMAY Technology Distributor in Malaysia"
    }
  },
  zh: {
    // Navigation
    nav: {
      benefits: "产品优势",
      applications: "应用场景",
      products: "产品中心", 
      services: "服务支持",
      contact: "联系我们",
      getQuote: "获取报价"
    },
    // Hero Section
    hero: {
      distributor: "🇲🇾 马来西亚官方经销商 Tolbao",
      title: "HMAY智能显示屏",
      subtitle: "专业交互式平板显示器和商用显示设备，为现代工作空间而生",
      features: {
        display: "4K超高清显示",
        touch: "20点多点触控",
        os: "安卓12系统", 
        brand: "世界500强品牌"
      },
      whatsappDemo: "WhatsApp演示",
      downloadBrochure: "下载手册",
      productTitle: "HMAY交互式平板显示器",
      productSubtitle: "体验协作的未来",
      liveDemo: "现场演示可用"
    },
    // Benefits Section  
    benefits: {
      title: "交互式平板显示器优势",
      subtitle: "用尖端协作技术改变您的工作空间",
      multipleScreen: {
        title: "多屏共享",
        desc: "同时连接多达8台设备，一次显示4个屏幕，无需任何线缆。"
      },
      wireless: {
        title: "无线镜像",
        desc: "无线共享屏幕，无需物理线缆。永远告别杂乱的线缆和连接器问题。"
      },
      whiteboard: {
        title: "数字白板",
        desc: "使用我们先进的数字白板创建想法、笔记、表格、图表和流程图。"
      },
      sharing: {
        title: "轻松共享",
        desc: "只需简单扫描二维码即可共享讨论笔记、想法、演示文稿和会议纪要。"
      },
      control: {
        title: "简易控制",
        desc: "直接从HMAY面板控制您的计算机，无需任何额外的硬件或软件。"
      },
      brightness: {
        title: "明亮房间优化",
        desc: "借助我们先进的LED背光技术和防眩光涂层，房间照明不再是问题。"
      }
    },
    // Applications Section
    applications: {
      title: "交互式平板显示器应用",
      subtitle: "适用于各行各业和工作空间的多功能解决方案",
      meeting: {
        title: "智能会议室",
        desc1: "通过交互式显示器、数字白板和无缝屏幕共享来改造会议室，实现演示功能。",
        desc2: "完美适用于办公室与全球客户之间的远程会议和视频会议。"
      },
      education: {
        title: "教育培训",
        desc: "适用于幼儿园、学校、学院、大学和企业培训项目的先进培训工具。"
      },
      healthcare: {
        title: "医疗保健与政府",
        desc: "医疗咨询、患者教育、远程医疗应用和政府演示系统。"
      }
    },
    // Products Section
    products: {
      title: "HMAY交互式平板显示器及配件",
      subtitle: "HMAY商用显示解决方案完整生态系统",
      interactive: {
        title: "交互式面板",
        size: "55″ / 65″ / 75″ / 86″ / 98″"
      },
      tablet: {
        title: "智能平板专业版",
        desc: "Windows和安卓模块"
      },
      stands: {
        title: "移动支架", 
        desc: "可调节高度支架"
      },
      wireless: {
        title: "无线共享",
        desc: "加密狗和共享盒"
      },
      viewSpecs: "查看规格"
    },
    // Services Section
    services: {
      title: "我们的专业服务",
      subtitle: "交互式显示需求的完整支持生态系统",
      sales: {
        title: "销售与分销",
        desc: "HMAY交互式面板和商用显示器在马来西亚的官方授权经销商。"
      },
      support: {
        title: "支持与维护",
        desc: "拥有专业培训的专业技术团队，为所有HMAY设备提供支持。"
      },
      warranty: {
        title: "保修与配件", 
        desc: "全面的保修支持，拥有充足的备件库存以确保持续运营。"
      },
      training: {
        title: "培训与发展",
        desc: "为内部团队和客户提供专业培训项目和实践研讨会。"
      }
    },
    // Slideshow Section
    slideshow: {
      title: "HMAY交互式平板显示器"
    },
    // Contact Section
    contact: {
      title: "预约现场演示",
      subtitle: "亲身体验HMAY交互式平板显示器",
      whatsappCall: "WhatsApp / 电话",
      email: "邮箱",
      businessHours: "营业时间",
      hours: "周一至周五 09:00 - 18:00",
      whatsappDemo: "WhatsApp演示申请",
      emailInquiry: "邮件咨询", 
      location: "吉隆坡，马来西亚 • HMAY科技官方经销商"
    },
    // Footer
    footer: {
      company: {
        desc1: "HMAY交互式显示解决方案马来西亚官方经销商。",
        desc2: "用尖端技术改变工作空间。"
      },
      products: {
        title: "产品",
        interactive: "交互式平板显示器",
        tablet: "智能平板专业版",
        commercial: "商用显示器",
        wireless: "无线共享解决方案"
      },
      services: {
        title: "服务",
        sales: "销售与分销",
        installation: "安装与设置",
        training: "培训与支持", 
        warranty: "保修与维护"
      },
      company_links: {
        title: "公司",
        about: "关于HMAY",
        clients: "我们的客户",
        contact: "联系我们",
        terms: "条款与条件"
      },
      copyright: "© 2024 HMAY Interactive Solutions. 版权所有。| 马来西亚HMAY科技官方经销商"
    }
  }
}

const App = () => {
  const [language, setLanguage] = useState('en')
  const isDarkMode = false // Always light mode
  const t = translations[language]
  const path = window.location.pathname

  if (path === '/blog' || path === '/blog/') {
    return <Blog />
  }

  // Slider images data - Your uploaded images (no text overlays)
  const sliderImages = [
    {
      src: '/images/slider-images/hmayslider1.jpeg',
      alt: 'HMAY Interactive Panel Solution 1'
    },
    {
      src: '/images/slider-images/hmayslider2.jpeg',
      alt: 'HMAY Interactive Panel Solution 2'
    },
    {
      src: '/images/slider-images/hmayslider3.jpeg',
      alt: 'HMAY Interactive Panel Solution 3'
    },
    {
      src: '/images/slider-images/hmayslider4.jpeg',
      alt: 'HMAY Interactive Panel Solution 4'
    },
    {
      src: '/images/slider-images/hmayslider5.jpeg',
      alt: 'HMAY Interactive Panel Solution 5'
    },
    {
      src: '/images/slider-images/hmayslider6.jpeg',
      alt: 'HMAY Interactive Panel Solution 6'
    },
    {
      src: '/images/slider-images/hmayslider7.jpeg',
      alt: 'HMAY Interactive Panel Solution 7'
    },
    {
      src: '/images/slider-images/hmayslider8.jpeg',
      alt: 'HMAY Interactive Panel Solution 8'
    },
    {
      src: '/images/slider-images/hmayslider9.jpeg',
      alt: 'HMAY Interactive Panel Solution 9'
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const WhatsAppButton = ({ className = "", children, large = false }) => (
    <a
      href="https://wa.me/60129319468"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white ${large ? 'px-8 py-4 text-lg' : 'px-6 py-3'} rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold ${className}`}
    >
      <svg width={large ? 24 : 20} height={large ? 24 : 20} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
      </svg>
      {children}
    </a>
  )

  const LanguageToggle = () => (
    <button
      onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
      className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 border backdrop-blur-sm bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 border-gray-300"
    >
      <Languages size={16} />
      <span className="text-sm font-medium">{language === 'en' ? '中文' : 'EN'}</span>
    </button>
  )



  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
              <nav className="backdrop-blur-xl shadow-lg border-b sticky top-0 z-50 bg-white/80 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <img src={HmayLogo} alt="HMAY Interactive Solutions" className="h-8 sm:h-10 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#benefits" className="px-3 py-2 text-sm font-medium transition-colors text-gray-600 hover:text-gray-900">{t.nav.benefits}</a>
                <a href="#applications" className="px-3 py-2 text-sm font-medium transition-colors text-gray-600 hover:text-gray-900">{t.nav.applications}</a>
                <a href="#products" className="px-3 py-2 text-sm font-medium transition-colors text-gray-600 hover:text-gray-900">{t.nav.products}</a>
                <a href="#services" className="px-3 py-2 text-sm font-medium transition-colors text-gray-600 hover:text-gray-900">{t.nav.services}</a>
                <a href="#contact" className="px-3 py-2 text-sm font-medium transition-colors text-gray-600 hover:text-gray-900">{t.nav.contact}</a>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageToggle />
              <a
                href="https://wa.me/60129319468"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden bg-white"
        style={{
          width: '100vw',
        }}
      >
        <img 
          src="/images/hero-bg.png" 
          alt="Hero Background" 
          className="w-full h-auto object-cover"
          style={{ display: 'block' }}
        />
        <div className="absolute inset-0 flex items-start justify-center pt-8 sm:pt-12 lg:pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center w-full"
            >
            <motion.div variants={fadeInUp} className="mb-8 relative">
              {/* Static decoration - no animation */}
              <div className="hidden sm:block absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-xl"></div>
              <div className="hidden sm:block absolute -top-5 -right-5 w-14 h-14 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-15 blur-lg"></div>
              
              <div className={`inline-block px-6 py-3 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-[#007acc]/20 to-purple-500/20 text-[#4fc3f7] border border-[#007acc]/30 shadow-lg shadow-blue-500/10' 
                  : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border border-blue-300/50 shadow-lg shadow-blue-500/10'
              }`}>
                ✨ {t.hero.distributor}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight text-gray-900">
                {t.hero.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 text-gray-800">
                {t.hero.subtitle}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8 sm:mb-12">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-4 text-sm px-4 sm:px-0">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 bg-white border border-gray-200 hover:shadow-xl">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
                  <span className="font-medium text-xs sm:text-sm text-black">{t.hero.features.display}</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 bg-white border border-gray-200 hover:shadow-xl">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
                  <span className="font-medium text-xs sm:text-sm text-black">{t.hero.features.touch}</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 bg-white border border-gray-200 hover:shadow-xl">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
                  <span className="font-medium text-xs sm:text-sm text-black">{t.hero.features.os}</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 bg-white border border-gray-200 hover:shadow-xl">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
                  <span className="font-medium text-xs sm:text-sm text-black">{t.hero.features.brand}</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      {sliderImages && sliderImages.length > 0 && (
        <section className="py-8 sm:py-12 relative bg-gray-50">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                {t.slideshow.title}
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ImageSlider images={sliderImages} />
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* Interactive Flat Panel Benefits */}
      <section id="benefits" className="py-12 sm:py-20 relative bg-gray-50">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-16 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-black">
                {t.benefits.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                {t.benefits.subtitle}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              <motion.div variants={fadeInUp} className="rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm bg-white hover:shadow-xl border border-gray-200 p-5 sm:p-8">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-gray-100 border border-gray-200">
                  <Share2 className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{t.benefits.multipleScreen.title}</h3>
                <p className="text-gray-600">{t.benefits.multipleScreen.desc}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm bg-white hover:shadow-xl border border-gray-200 p-5 sm:p-8">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-gray-100 border border-gray-200">
                  <Wifi className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{t.benefits.wireless.title}</h3>
                <p className="text-gray-600">{t.benefits.wireless.desc}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm bg-white hover:shadow-xl border border-gray-200 p-5 sm:p-8">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-gray-100 border border-gray-200">
                  <PenTool className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{t.benefits.whiteboard.title}</h3>
                <p className="text-gray-600">{t.benefits.whiteboard.desc}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm bg-white hover:shadow-xl border border-gray-200 p-5 sm:p-8">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-gray-100 border border-gray-200">
                  <QrCode className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{t.benefits.sharing.title}</h3>
                <p className="text-gray-600">{t.benefits.sharing.desc}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm bg-white hover:shadow-xl border border-gray-200 p-5 sm:p-8">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-gray-100 border border-gray-200">
                  <MousePointer className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{t.benefits.control.title}</h3>
                <p className="text-gray-600">{t.benefits.control.desc}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm bg-white hover:shadow-xl border border-gray-200 p-5 sm:p-8">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-gray-100 border border-gray-200">
                  <Sun className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{t.benefits.brightness.title}</h3>
                <p className="text-gray-600">{t.benefits.brightness.desc}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className={`py-12 sm:py-20 relative transition-colors duration-300 ${
        isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gradient-to-br from-white via-slate-50 to-indigo-50'
      }`}>
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-b from-transparent via-[#007acc]/5 to-transparent' 
            : 'bg-gradient-to-b from-transparent via-blue-500/10 to-transparent'
        }`}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-16 px-4 sm:px-0">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-[#cccccc]' : 'text-slate-800'
              }`}>
                {t.applications.title}
              </h2>
              <p className={`text-lg sm:text-xl transition-colors duration-300 ${
                isDarkMode ? 'text-[#888888]' : 'text-slate-600'
              }`}>
                {t.applications.subtitle}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              <motion.div variants={fadeInUp} className={`rounded-xl p-5 sm:p-8 transition-all duration-300 shadow-lg backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-[#2d2d2d] hover:bg-[#3e3e3e] border border-[#404040]' 
                  : 'bg-white hover:bg-blue-50 border border-blue-200 shadow-blue-100'
              }`}>
                <Building className={`w-10 sm:w-12 h-10 sm:h-12 mb-4 sm:mb-6 ${isDarkMode ? 'text-[#4fc3f7]' : 'text-blue-600'}`} />
                <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-[#cccccc]' : 'text-slate-800'}`}>{t.applications.meeting.title}</h3>
                <p className={`mb-3 sm:mb-4 text-sm sm:text-base ${isDarkMode ? 'text-[#888888]' : 'text-slate-600'}`}>{t.applications.meeting.desc1}</p>
                <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#888888]' : 'text-slate-600'}`}>{t.applications.meeting.desc2}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className={`rounded-xl p-5 sm:p-8 transition-all duration-300 shadow-lg backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-[#2d2d2d] hover:bg-[#3e3e3e] border border-[#404040]' 
                  : 'bg-white hover:bg-emerald-50 border border-emerald-200 shadow-emerald-100'
              }`}>
                <GraduationCap className={`w-10 sm:w-12 h-10 sm:h-12 mb-4 sm:mb-6 ${isDarkMode ? 'text-[#4fc3f7]' : 'text-emerald-600'}`} />
                <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-[#cccccc]' : 'text-slate-800'}`}>{t.applications.education.title}</h3>
                <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#888888]' : 'text-slate-600'}`}>{t.applications.education.desc}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className={`rounded-xl p-5 sm:p-8 transition-all duration-300 shadow-lg backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-[#2d2d2d] hover:bg-[#3e3e3e] border border-[#404040]' 
                  : 'bg-white hover:bg-rose-50 border border-rose-200 shadow-rose-100'
              }`}>
                <Stethoscope className={`w-10 sm:w-12 h-10 sm:h-12 mb-4 sm:mb-6 ${isDarkMode ? 'text-[#4fc3f7]' : 'text-rose-600'}`} />
                <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-[#cccccc]' : 'text-slate-800'}`}>{t.applications.healthcare.title}</h3>
                <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#888888]' : 'text-slate-600'}`}>{t.applications.healthcare.desc}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className={`py-12 sm:py-20 relative transition-colors duration-300 ${
        isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'
      }`}>
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-[#007acc]/5 via-transparent to-[#4fc3f7]/3' 
            : 'bg-gradient-to-r from-blue-100/20 via-transparent to-indigo-100/20'
        }`}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-[#cccccc]' : 'text-slate-800'
              }`}>
                {t.products.title}
              </h2>
              <p className={`text-xl transition-colors duration-300 ${
                isDarkMode ? 'text-[#888888]' : 'text-slate-600'
              }`}>
                {t.products.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div variants={fadeInUp} className={`rounded-xl p-6 transition-all duration-300 shadow-lg backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                  : 'bg-white hover:bg-blue-50 border border-blue-200 shadow-blue-100'
              }`}>
                <Monitor className={`w-10 h-10 mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{t.products.interactive.title}</h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-white/70' : 'text-slate-600'}`}>{t.products.interactive.size}</p>
                <button className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                  isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                }`}>
                  {t.products.viewSpecs} <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div variants={fadeInUp} className={`rounded-xl p-6 transition-all duration-300 shadow-lg backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                  : 'bg-white hover:bg-emerald-50 border border-emerald-200 shadow-emerald-100'
              }`}>
                <Cpu className={`w-10 h-10 mb-4 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{t.products.tablet.title}</h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-white/70' : 'text-slate-600'}`}>{t.products.tablet.desc}</p>
                <button className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                  isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-emerald-600 hover:text-emerald-700'
                }`}>
                  {t.products.viewSpecs} <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div variants={fadeInUp} className={`rounded-xl p-6 transition-all duration-300 shadow-lg backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                  : 'bg-white hover:bg-purple-50 border border-purple-200 shadow-purple-100'
              }`}>
                <Wrench className={`w-10 h-10 mb-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{t.products.stands.title}</h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-white/70' : 'text-slate-600'}`}>{t.products.stands.desc}</p>
                <button className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                  isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-purple-600 hover:text-purple-700'
                }`}>
                  {t.products.viewSpecs} <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div variants={fadeInUp} className={`rounded-xl p-6 transition-all duration-300 shadow-lg backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                  : 'bg-white hover:bg-orange-50 border border-orange-200 shadow-orange-100'
              }`}>
                <Share2 className={`w-10 h-10 mb-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{t.products.wireless.title}</h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-white/70' : 'text-slate-600'}`}>{t.products.wireless.desc}</p>
                <button className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                  isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-orange-600 hover:text-orange-700'
                }`}>
                  {t.products.viewSpecs} <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`py-12 sm:py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gradient-to-br from-slate-50 via-white to-indigo-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-[#cccccc]' : 'text-slate-800'
              }`}>
                {t.services.title}
              </h2>
              <p className={`text-xl transition-colors duration-300 ${
                isDarkMode ? 'text-[#888888]' : 'text-slate-600'
              }`}>
                {t.services.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeInUp} className={`rounded-xl p-8 transition-all duration-300 text-center shadow-lg ${
                isDarkMode 
                  ? 'bg-[#2d2d2d] hover:bg-[#3e3e3e] border border-[#404040]' 
                  : 'bg-white hover:bg-blue-50 border border-blue-200 shadow-blue-100'
              }`}>
                <ShoppingBag className={`w-12 h-12 mx-auto mb-4 ${isDarkMode ? 'text-[#4fc3f7]' : 'text-blue-600'}`} />
                <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-[#cccccc]' : 'text-slate-800'}`}>{t.services.sales.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-[#888888]' : 'text-slate-600'}`}>{t.services.sales.desc}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className={`rounded-xl p-8 transition-all duration-300 text-center shadow-lg ${
                isDarkMode 
                  ? 'bg-[#2d2d2d] hover:bg-[#3e3e3e] border border-[#404040]' 
                  : 'bg-white hover:bg-emerald-50 border border-emerald-200 shadow-emerald-100'
              }`}>
                <Wrench className={`w-12 h-12 mx-auto mb-4 ${isDarkMode ? 'text-[#4fc3f7]' : 'text-emerald-600'}`} />
                <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-[#cccccc]' : 'text-slate-800'}`}>{t.services.support.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-[#888888]' : 'text-slate-600'}`}>{t.services.support.desc}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className={`rounded-xl p-8 transition-all duration-300 text-center shadow-lg ${
                isDarkMode 
                  ? 'bg-[#2d2d2d] hover:bg-[#3e3e3e] border border-[#404040]' 
                  : 'bg-white hover:bg-purple-50 border border-purple-200 shadow-purple-100'
              }`}>
                <Shield className={`w-12 h-12 mx-auto mb-4 ${isDarkMode ? 'text-[#4fc3f7]' : 'text-purple-600'}`} />
                <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-[#cccccc]' : 'text-slate-800'}`}>{t.services.warranty.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-[#888888]' : 'text-slate-600'}`}>{t.services.warranty.desc}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className={`rounded-xl p-8 transition-all duration-300 text-center shadow-lg ${
                isDarkMode 
                  ? 'bg-[#2d2d2d] hover:bg-[#3e3e3e] border border-[#404040]' 
                  : 'bg-white hover:bg-orange-50 border border-orange-200 shadow-orange-100'
              }`}>
                <GraduationCap className={`w-12 h-12 mx-auto mb-4 ${isDarkMode ? 'text-[#4fc3f7]' : 'text-orange-600'}`} />
                <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-[#cccccc]' : 'text-slate-800'}`}>{t.services.training.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-[#888888]' : 'text-slate-600'}`}>{t.services.training.desc}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book Demo Section */}
      <section id="contact" className={`py-12 sm:py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black' : 'bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center text-white"
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.contact.title}
              </h2>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-blue-100'}`}>
                {t.contact.subtitle}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <Phone className={`w-8 h-8 mx-auto mb-2 ${isDarkMode ? 'text-gray-400' : 'text-blue-200'}`} />
                <p className="font-semibold text-white">{t.contact.whatsappCall}</p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-blue-100'}`}>+60 12-931 9468</p>
              </div>
              <div className="text-center">
                <Calendar className={`w-8 h-8 mx-auto mb-2 ${isDarkMode ? 'text-gray-400' : 'text-blue-200'}`} />
                <p className="font-semibold text-white">{t.contact.businessHours}</p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-blue-100'}`}>{t.contact.hours}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <WhatsAppButton large className="bg-green-500 hover:bg-green-600">
                {t.contact.whatsappDemo}
              </WhatsAppButton>
            </motion.div>

            <motion.div variants={fadeInUp} className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-blue-200'}`}>
              <MapPin className="w-4 h-4 inline mr-2" />
              {t.contact.location}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">HMAY</h3>
              <p className="text-gray-400 text-sm mb-4">{t.footer.company.desc1}</p>
              <p className="text-gray-400 text-sm">{t.footer.company.desc2}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{t.footer.products.title}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.products.interactive}</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.products.tablet}</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.products.commercial}</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.products.education}</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.products.business}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{t.footer.services.title}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.services.installation}</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.services.training}</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.services.support}</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.services.maintenance}</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.services.warranty}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{t.footer.company.title}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.company.about}</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.company.contact}</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.company.careers}</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.company.news}</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">{t.footer.company.partners}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src={HmayLogo} alt="HMAY" className="h-8 w-auto" />
              <div>
                <p className="text-white font-semibold">HMAY Interactive Solutions</p>
                <p className="text-gray-400 text-sm">Official Malaysia Distributor Tolbao</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+60129319468" className="hover:text-white transition-colors">+60 12-931 9468</a>
              </div>
              <div className="flex items-center space-x-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486"/>
                </svg>
                <a href="https://wa.me/60129319468" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>{t.contact.location}</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 