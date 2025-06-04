import Icon from "@/components/ui/icon";

interface Document {
  icon: string;
  text: string;
}

interface DocumentCardProps {
  title: string;
  iconName: string;
  iconColor: string;
  bgColor: string;
  documents: Document[];
}

const DocumentCard = ({
  title,
  iconName,
  iconColor,
  bgColor,
  documents,
}: DocumentCardProps) => {
  return (
    <div className={`${bgColor} rounded-lg p-6`}>
      <div className="flex items-center space-x-3 mb-4">
        <div
          className={`w-8 h-8 ${iconColor} rounded-full flex items-center justify-center`}
        >
          <Icon name={iconName} size={16} className="text-white" />
        </div>
        <h4 className="font-bold text-gray-900">{title}</h4>
      </div>
      <ul className="space-y-2 text-sm text-gray-700">
        {documents.map((doc, index) => (
          <li key={index} className="flex items-start space-x-2">
            <Icon
              name={doc.icon}
              size={14}
              className={`${iconColor.replace("bg-", "text-")} mt-0.5 flex-shrink-0`}
            />
            <span>{doc.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentCard;
