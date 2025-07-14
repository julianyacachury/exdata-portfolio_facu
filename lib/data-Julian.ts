// Shared project data to be used across the site
export const projects = [
  {
    id: "roof",
    title: "Roof Detection System",
    category: "Growth",
    image: "/placeholder.svg?height=300&width=600",
    description:
      "Computer vision system for roof detection in satellite images, area measurement, and shape classification.",
    challenge:
      "A roof repair company needed to efficiently identify potential clients by analyzing satellite imagery to detect roofs requiring maintenance.",
    solution:
      "We developed a computer vision system that automatically detects roofs in satellite images, measures their area, and classifies their shapes and conditions.",
    results:
      "The system increased the company's lead generation by 45% while reducing the time spent on manual property assessment by 70%.",
    technologies: ["TensorFlow", "Python", "Computer Vision", "Google Earth", "AWS EC2"],
  },
  {
    id: "pharma",
    title: "Pharmaceutical Distribution Chatbot",
    category: "Healthcare",
    image: "/placeholder.svg?height=300&width=600",
    description: "AI-powered chatbot for answering questions about pharmaceutical shipments and purchases.",
    challenge:
      "A pharmaceutical distributor needed to handle a high volume of customer inquiries about shipments and purchases efficiently.",
    solution:
      "We created an intelligent chatbot using large language models that could accurately answer questions about order status, shipping details, and product information.",
    results:
      "The chatbot reduced response time from hours to seconds, handling 85% of routine inquiries without human intervention and improving customer satisfaction scores by 32%.",
    technologies: ["LLMs", "Flask", "MS SQL", "Python", "Natural Language Processing"],
  },
  {
    id: "OCR",
    title: "OCR Document Processing System",
    category: "Automatization",
    image: "/placeholder.svg?height=300&width=600",
    description:
      "Our system reads .eml email files, extracts attached PDFs, and scans them for QR or barcodes using PyZbar. If valid codes are found, OCR is applied with Tesseract to extract key data. Files are then automatically renamed and organized based on the extracted information. Seamlessly integrates into your workflow to save time and reduce errors.",
    challenge:
      "The client was receiving large volumes of emails containing invoice PDFs, which had to be manually reviewed, classified, and renamed based on embedded QR or barcodes. This process was time-consuming, prone to human error, and lacked consistency.",
    solution:  
      "We implemented an automated pipeline that scans `.eml` files, extracts attached PDFs, and analyzes their content to determine whether they are suitable for OCR. If eligible, a specific predefined section of each document is processed using Tesseract OCR to extract relevant text. This extracted data is saved in `.txt` files for later structured analysis.",
    results:
      "The automation reduced processing time by over 80%, eliminated manual errors, and ensured consistent document naming and classification. The client now processes hundreds of files daily with minimal oversight, significantly improving operational efficiency.",
    technologies: ["Python", "OCR", "Web Automation", "[TECH 4]", "[TECH 5]"],
  },
  {
  id: "ExactasAgent",
  title: "University Information Agent System",
  category: "AI Automation",
  image: "/placeholder.svg?height=300&width=600",
  description:
    "We developed an intelligent query agent for the Faculty of Exact and Natural Sciences (UBA), enabling students and staff to access real-time information about class schedules, room assignments, professors, surveys, administrative procedures, and more—all through a conversational interface.",
  challenge:
    "The university’s online systems were fragmented and hard to navigate, making it difficult for students to quickly access practical information like course schedules, classroom changes, or how to complete administrative procedures. This led to frustration and inefficiency, especially during peak academic periods.",
  solution:
    "We created a centralized agent that integrates data from multiple university sources and platforms. The system understands natural language queries and responds with accurate, real-time information about courses, professors, classrooms, surveys, and administrative steps. It’s accessible via web or chat interfaces, significantly improving user experience.",
  results:
    "The agent system greatly reduced the time users spent searching for academic and administrative information. Students now get instant answers to their queries, and university staff reported a decrease in repetitive questions. Overall, it streamlined access to critical data and improved satisfaction across the board.",
  technologies: ["Python", "Natural Language Processing", "Web Scraping", "FastAPI", "BeautifulSoup"],
  },
  {
  id: "DIBtoDCOM",
  title: "Custom Software and DLLs for Medical Image Conversion",
  category: "Healthcare",
  image: "/placeholder.svg?height=300&width=600",
  description:
    "We developed custom software and DLLs to convert medical images from DIB (Device Independent Bitmap) format to DCOM, ensuring compatibility with specialized healthcare imaging systems. The solution streamlines the integration of legacy image data into modern diagnostic platforms.",
  challenge:
    "A healthcare client needed to migrate a large archive of medical images stored in the outdated DIB format to the DCOM format used in current medical imaging systems. Manual conversion or third-party tools were either unreliable or insufficiently customizable.",
  solution:
    "We created a robust and efficient image conversion pipeline in the form of custom software and dynamic-link libraries (DLLs). These tools were specifically designed to handle medical image data, preserving fidelity and metadata while converting from DIB to DCOM format in bulk.",
  results:
    "The client achieved full integration of legacy image data into their modern imaging platform. The custom solution reduced manual handling, ensured regulatory compliance, and provided reliable, high-fidelity conversions at scale.",
  technologies: ["C++", "WinAPI", "Image Processing", "DLL Development", "Healthcare Imaging Standards"],
  },
]

