export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  image2?: string;
  image3?: string;
  imageBeforeSolution?: string;
  result: string;
  shortDesc: string;
  client: string;
  timeline: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string[];
  techExplanation?: string;
}

export const projects: Project[] = [
  {
    id: "song-platform",
    title: "Song Platform: Architecting a Multi-Million-Dollar Commercial Real Estate Ecosystem",
    category: "Business Development Manager",
    image: "/images/SongPlatform1.jpg",
    image2: "/images/SongPlatform4.jpg",
    imageBeforeSolution: "/images/SongPlatform2.jpg",
    result: "Secured Capital & Launch",
    shortDesc: "Transformed a stagnant commercial property into Vietnam's first immersive digital art museum through rigorous financial modeling and strategic technical partnerships.",
    client: "Song Platform",
    timeline: "2022 – 2023",
    challenge: `Revitalizing a Stagnant Asset

In 2022, a major Vietnamese investor, Nguyen Kim, possessed an empty four-story commercial real estate property in Hue. Originally intended to be a traditional shopping mall, the project faced a critical roadblock. Post-COVID-19, the local tourism-dependent economy was struggling, and international travel had not fully rebounded. Furthermore, the local demographic primarily used malls for the "free air conditioning" rather than retail consumption.

With 2,200 sqm per floor on levels 1–3 and a massive 2,600 sqm space with exceptionally high ceilings on the 4th floor (originally slated for a cinema), the asset was at risk of becoming a sunk cost. The challenge was clear: we needed to conceptualize and execute a destination so compelling that it would draw domestic tourists from across the country to a relatively rural city.`,
    solution: `The Strategy: A First-to-Market Innovation

Working closely with our CEO, Mr. Duong Do, and our CFO, we realized a standard retail and cinema model would fail. Drawing on my time living in France and experiencing the groundbreaking Atelier des Lumières in Paris, I advocated for transforming the cavernous 4th floor into Vietnam’s very first large-scale Immersive Digital Art Museum. The remaining floors would be redeveloped into a curated mix of co-working spaces and local F&B concepts designed to mimic the flow of the iconic Perfume River.

As the Business Development Manager, I took full ownership of talent and technology sourcing, financial modeling, and investor pitching, ultimately transitioning into the Project Manager role to oversee the renovation.

The Execution: Technical Sourcing & Financial Control

Because an immersive museum of this scale had never been executed in Vietnam, the technical and operational roadmap had to be built from scratch.

• Rapid Technical Upskilling & Sourcing: I dedicated myself to an intensive research sprint, mastering the commercial and technical specifications of multimedia installations, spatial audio-video solutions, and high-lumen digital projectors. I executed a cold-outreach campaign across LinkedIn and email to global AV contractors and digital artists. After months of rigorous vetting and pitching, I successfully secured partnerships with Hexogon Group (for projection mapping technology) and prominent visual artist Tùng Monkey.

• Rigorous Financial Modeling: To prove the project's viability to the board, I built a comprehensive Capital Expenditure (CapEx) model. Utilizing a Zone-Based Cost Breakdown Structure (CBS) combined with Parametric (Unit) Estimating, I mapped out exact costs across net and gross usable areas. This ensured every technical requirement—from complex facade lighting to the immersive tech stack—was grounded in strict financial reality.

• Securing the Capital: Armed with a bulletproof CapEx model and secured technical partnerships, the CFO and I pitched the investors across three grueling rounds. We successfully secured the required capital to greenlight the project.`,
    impact: `A Landmark Commercial Success - The strategic pivot and rigorous execution transformed an empty shell into a cultural landmark:

• A National First: SongLab successfully launched as Vietnam's first large-scale digital art museum, covering over 1,000 square meters on the 4th floor of the newly branded Song Platform.

• Cutting-Edge Integration: The space utilizes state-of-the-art 3D projection mapping and interactive digital graphics, allowing the immersive art to respond dynamically to visitors' physical movements in real-time.

• Cultural & Commercial Impact: Featuring 8 distinct digital artworks across 5 uniquely designed rooms, the museum seamlessly blended modern visual technology with Hue's imperial heritage.

• Immediate Traction: Within the first few weeks of its trial opening, Song Platform opened its doors to thousands of local and international visitors, successfully proving our hypothesis and revitalizing the commercial center.`,
    stack: ["CapEx Modeling", "Go-To-Market Strategy", "Real Estate Development", "Stakeholder Management"]
  },
  {
    id: "gen-z-coliving",
    title: "Gen Z Co-Living Launch: Bridging Global Investment Models with Local Market Realities",
    category: "Sales & Marketing Manager",
    image: "/images/Belong1.jpg",
    image2: "/images/Belong2.jpg",
    image3: "/images/Belong1.5.jpg",
    result: "46% Revenue Surge",
    shortDesc: "Bridged the gap between international investor expectations and local market reality, driving 46% revenue growth and securing $201k in Q1 deals during the pandemic.",
    client: "Belong Co-Living",
    timeline: "2020 – 2022",
    challenge: `Bridging the Gap Between Investor Vision and Local Reality

A global real estate investment fund acquired three properties in Vietnam. To commercialize these assets, we created a new, premium co-living brand. The immediate challenge was navigating a stark difference in market expectations. The international Board of Directors strongly favored a "copy-paste" of a successful overseas model: invest solely in core construction and lease the premium apartments completely unfurnished to minimize upfront costs. However, high-paying local tenants expect turnkey, fully furnished spaces. The global leadership team was highly hesitant to adapt the product design to fit local demands.

Proving the Need for Localization

As the Sales and Marketing Manager, my objective was twofold: collect hard data to prove to the board that the local market required a different product strategy, and develop a marketing pipeline that appeased their financial constraints while still attracting tenants in a challenging post-COVID landscape.`,
    solution: `• Data-Driven Pushback: I collaborated with Savills, a premier real estate intelligence firm, to extract concrete data on local demand. This allowed me to segment our product: targeting international professionals with fully furnished rooms via B2B agencies, and targeting local Gen Z students with smaller, unfurnished rooms via social media.

• Agile CapEx Optimization: When the board refused to fully fund furnishing, I proposed an A/B testing model. I tracked website inquiries to furnish rooms strictly on-demand. For the remaining empty rooms, I flipped our weakness into a unique selling proposition: marketing them as "blank canvas" spaces for customization.

• Zero-Cost Sourcing: To market both options without ballooning the budget, I negotiated a strategic partnership with Zago, a premium furniture supplier. I secured their furniture for free to stage our photoshoots; in exchange, I integrated Zago into our sales pipeline, actively promoting their products to our "blank canvas" clients.`,
    impact: `Profitable Growth and Board Alignment

• Optimized Capital Expenditure: The "on-demand" model and the Zago partnership protected the board's upfront capital while delivering a premium aesthetic.

• 46% Revenue Surge: By deploying agile omnichannel campaigns, I aggressively increased overall revenue by 46% during the height of the COVID-19 pandemic.

• $201K in High-Stakes Q1 Deals: Directly negotiated and closed critical long-term accommodation and retail leases, generating $201,000 in the first quarter.`,
    stack: ["Market Research", "CapEx Optimization", "Omnichannel Marketing", "Strategic Partnerships"]
  },
  {
    id: "dojoy-toys",
    title: "DOJOY TOYS: Bootstrapping a Premium Tech Toy Brand & Scaling an International Supply Chain",
    category: "Founder & Director",
    image: "/images/Dojoy1.png",
    image2: "/images/Dojoy2.png",
    image3: "/images/Dojoy3.JPG",
    result: "54% YoY Growth",
    shortDesc: "Bootstrapped a premium tech toy brand from concept to nationwide market pioneer, scaling revenue 54% YoY through strategic global procurement and brand positioning.",
    client: "DOJOY TOYS",
    timeline: "2019 – 2023",
    challenge: `The foundation of DOJOY TOYS stems from a deeply personal experience. When my first nephew was born in 2019, my search for the perfect gift revealed a heavily polarized Vietnamese toy market. Parents were consistently forced to choose between cheap, potentially harmful plastic items and prohibitively expensive educational imports. This extreme contrast created a culture of disposable consumerism, where parents settled for unsustainable products under the assumption that they would inevitably be destroyed anyway. Recognizing the glaring lack of a middle-tier supplier, I saw a clear opportunity to disrupt this cycle by building a brand centered on accessible safety, durable quality, and engaging education.

Bootstrapping Operations and Shifting Consumer Mindsets

As the Founder and Director, my objective was twofold: build DOJOY TOYS from a conceptual idea into a trusted, nationwide brand. This required three massive undertakings: I needed to architect a reliable international supply chain from scratch, I needed to completely re-educate the consumer market through high-end marketing, and I needed to build a logistics network capable of servicing both individual B2B buyers and large B2B accounts.`,
    solution: `Key actions: Remote Procurement, Visual Storytelling, and Strategic Distribution
I built the company's infrastructure by acting as a hybrid between a commercial director and a brand marketer.

• Strategic Global Procurement: To protect early-stage capital, I built a resilient supply chain entirely remotely, eliminating the overhead of international travel. I conducted rigorous multi-regional vendor analyses across Vietnam, India, and China. Using Total Cost of Ownership (TCO) modeling, I secured highly competitive OEM/ODM contracts with Chinese manufacturers. I managed up to €20,000 per month in wholesale imports—curating premium wooden educational toys, STEM robotics kits, specialized board games, and remote-controlled drones—all while enforcing strict Acceptable Quality Limit (AQL) standards to guarantee product safety.

• Premium Brand Identity & Positioning: The strategy began with the name itself. I utilized cross-lingual phonetic transliteration to coin "DOJOY." It is a strategic play on words: phonetically mimicking Đồ Chơi (the Vietnamese word for "toys") while using the English words "Do" and "Joy" to subconsciously evoke action and happiness. To ensure our visual presentation matched this premium identity and combated the "cheap plastic" market mindset, I personally directed meticulous indoor photoshoots for every catalog item. This high-end visual storytelling repositioned our tech toys not as disposable purchases, but as durable, premium investments in a child's development.

• Centralized Logistics & B2B Expansion: Recognizing that scalable growth required a B2B pipeline, I strategized our physical footprint. I established a 700sqm central warehouse in Nha Trang—the geographic center of Vietnam—to optimize nationwide distribution. This logistical advantage allowed me to successfully pitch and secure high-value B2B accounts, including international schools, premium baby boutiques, and high-end bookstores across the country.`,
    impact: `A Market Pioneer with Consistent Scalability - Over five years, I successfully scaled DOJOY TOYS from a bootstrapped startup into a recognized market pioneer with a robust physical and digital footprint.

• 54% YoY Growth: By successfully educating the market and shifting consumer spending habits toward sustainable, premium products, I achieved a consistent 54% annual revenue growth.

• Operational Scale: Built a comprehensive infrastructure featuring two physical retail stores, a centralized 700sqm distribution hub, and a thriving e-commerce ecosystem.

• Diversified Revenue Streams: Secured highly profitable B2B contracts with educational institutions and premium retailers, proving the brand's broad market appeal and long-term commercial viability.`,
    stack: ["Entrepreneurship", "Remote Global Procurement", "Brand Positioning"]
  },
  {
    id: "heuritech-strategy",
    title: "Heuritech: Key Account Strategy for Global Industry Giants — LVMH, Dior, Prada",
    category: "Key Account Strategy & Market Analyst",
    image: "/images/assets/Heuritech-Strategy-Hero.jpg",
    image2: "/images/Heuritech3.jpg",
    imageBeforeSolution: "/images/assets/Heuritech-Mid-Article.jpg",
    result: "3M+ Images Analyzed Daily",
    shortDesc: "Leveraging deep learning and computer vision to navigate global industry leaders like Louis Vuitton and Dior.",
    client: "Heuritech",
    timeline: "2018 – 2019",
    techExplanation: `Heuritech is a world leader in Deep Learning and Computer Vision. The company’s proprietary AI engine scans over 3 million social media images and videos every day, utilizing convolutional neural networks to identify more than 2,000 distinct fashion attributes—from silhouettes and textures to complex patterns and colors. By filtering out "noise" and recognizing products in real-world environments, Heuritech provides global brands with a 90% accurate demand forecast, bridging the gap between raw visual data and commercial supply chain strategy.`,
    challenge: `Operating from Heuritech’s headquarters in central Paris, I was tasked with the mission of translating high-velocity AI data into actionable growth strategies. Working at the heart of the global fashion capital, I served as the essential strategic link between a complex deep-tech engine and the commercial boardrooms of international luxury houses. My focus was to ensure that the insights generated by our engineers were not just technically impressive, but commercially indispensable for the world’s most iconic brands.

• The IAM (Individual Account Mapping) Strategy: Global industry leaders have highly complex hierarchies. The challenge was to map these organizations to identify decision-makers—from Creative Directors to Supply Chain VPs—who could benefit from predictive AI.

• The Trend Noise: Separating a "passing fad" from a "seasonal macro-trend" required a high-precision analytical framework that could turn qualitative runway observations into quantitative data.`,
    solution: `
• Individual Account Mapping (IAM): Orchestrated a deep-dive mapping project for tier-1 accounts. I transformed raw lead data into a strategic map of stakeholders, allowing the sales team to penetrate multi-brand ecosystems like LVMH and Inditex with personalized value propositions.

• Fashion Show & Runway Analytics: Collaborated with the Operations and Developer teams to transform qualitative runway signals into quantitative trend reports. By bridging the gap between fashion intuition and data science, we provided brands like Dior and Mango with 12-month trend forecasts.

• Influencer Signal Detection: Supported the team in identifying early market signals. This data-driven approach allowed clients to identify 'growing styles' that would dominate the market months before hitting retail shelves.`,
    impact: `Operational Scale: Championed and co-developed an automated reporting workflow with the engineering team, eliminating a 48-hour manual data cycle. This shifted the team’s focus from administrative tasks to high-value strategic consulting.

High-Value Account Penetration: Successfully mapped the complex decision-making hierarchies of Tier-1 global accounts. This intelligence allowed the commercial team to target specific executive stakeholders within the LVMH and Kering ecosystems, significantly streamlining the B2B sales cycle.

Predictive Market Accuracy: Delivered data-backed trend forecasts with 90% accuracy, providing brands like Mango and Havaianas with the foundational research needed to align inventory with actual consumer demand 12 months in advance.`,
    stack: ["Deep Learning", "Computer Vision", "Market Intelligence", "Key Account Strategy"]
  }
];
