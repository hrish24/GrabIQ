import React, { useState } from 'react';

const Jobs = () => {
  const [dragOver, setDragOver] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setSelectedFiles(files);
  };

  const CloudUploadIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <path d="M12 16L7 11L8.4 9.6L11 12.2V4H13V12.2L15.6 9.6L17 11L12 16Z" fill="#1976d2"/>
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM17 13L12 18L7 13H10V9H14V13H17Z" fill="#1976d2"/>
    </svg>
  );

  const CloudDownloadIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <path d="M12 8L7 13L8.4 14.4L11 11.8V20H13V11.8L15.6 14.4L17 13L12 8Z" fill="#0288d1"/>
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM17 11L12 6L7 11H10V15H14V11H17Z" fill="#0288d1"/>
    </svg>
  );

  const DescriptionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
    </svg>
  );

  const FileUploadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
      <path d="M12,19L8,15H10.5V12H13.5V15H16L12,19Z"/>
    </svg>
  );

  const UploadArea = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        style={{
          minHeight: '300px',
          border: dragOver ? '2px dashed #1976d2' : '2px dashed #e0e0e0',
          borderRadius: '8px',
          backgroundColor: dragOver ? '#f3f4f6' : (isHovered ? '#fafafa' : 'transparent'),
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px'
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: dragOver ? '#e3f2fd' : '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <CloudUploadIcon />
        </div>
        <div style={{
          fontSize: '16px',
          color: '#424242',
          marginBottom: '8px',
          lineHeight: '1.5'
        }}>
          Drop your files/folder here or{' '}
          <label style={{
            color: '#1976d2',
            textDecoration: 'underline',
            cursor: 'pointer',
            fontSize: 'inherit',
            fontFamily: 'inherit'
          }}>
            Click to upload
            <input
              type="file"
              style={{ display: 'none' }}
              multiple
              onChange={handleFileSelect}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.tiff"
            />
          </label>
        </div>
        <div style={{
          fontSize: '14px',
          color: '#757575',
          lineHeight: '1.5'
        }}>
          Upload single PDF files or select a folder containing PDF files.
        </div>
      </div>
    );
  };

  const ImportArea = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        style={{
          minHeight: '300px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: isHovered ? '#fafafa' : 'transparent',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: '#e1f5fe',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <CloudDownloadIcon />
        </div>
        <div style={{
          fontSize: '16px',
          color: '#424242',
          marginBottom: '8px',
          lineHeight: '1.5'
        }}>
          Import from cloud storage location{' '}
          <button style={{
            color: '#1976d2',
            textDecoration: 'underline',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 'inherit',
            padding: '0',
            fontFamily: 'inherit'
          }}>
            Click to Import
          </button>
        </div>
        <div style={{
          fontSize: '14px',
          color: '#757575',
          lineHeight: '1.5'
        }}>
          Scanned PDF, Digital PDF, PNG, JPEG, TIFF, MS Office Docs.
        </div>
      </div>
    );
  };

  const DocumentsSelected = () => {

    return (
      <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        textAlign: 'center',
        padding: '40px 30px'
      }}>
        {selectedFiles.length === 0 ? (
          <>
            <div style={{
              position: 'relative',
              width: '140px',
              height: '140px',
              marginBottom: '30px'
            }}>
              {/* Stack of documents illustration */}
              <div style={{
                position: 'absolute',
                width: '70px',
                height: '90px',
                borderRadius: '4px',
                backgroundColor: '#e0e0e0',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                left: '10px',
                top: '12px',
                transform: 'rotate(-10deg)',
                zIndex: 1
              }}></div>
              <div style={{
                position: 'absolute',
                width: '70px',
                height: '90px',
                borderRadius: '4px',
                backgroundColor: '#90caf9',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                left: '35px',
                top: '6px',
                transform: 'rotate(5deg)',
                zIndex: 2
              }}></div>
              <div style={{
                position: 'absolute',
                width: '70px',
                height: '90px',
                borderRadius: '4px',
                backgroundColor: '#1976d2',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                left: '60px',
                top: '0px',
                transform: 'rotate(10deg)',
                zIndex: 3,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <DescriptionIcon />
              </div>
            </div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '500',
              color: '#757575',
              marginBottom: '12px',
              marginTop: '0'
            }}>
              No Documents Selected Yet
            </h3>
            <div style={{
              fontSize: '14px',
              color: '#9e9e9e',
              lineHeight: '1.5'
            }}>
              Upload or select required documents to continue.
            </div>
          </>
        ) : (
          <div style={{
            width: '100%',
            textAlign: 'left'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#424242',
              marginBottom: '20px',
              marginTop: '0'
            }}>
              Documents Selected ({selectedFiles.length})
            </h3>
            {selectedFiles.map((file, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                backgroundColor: '#e3f2fd',
                borderRadius: '6px',
                marginBottom: '8px'
              }}>
                <div style={{
                  color: '#1976d2',
                  marginRight: '10px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <FileUploadIcon />
                </div>
                <span style={{
                  fontSize: '14px',
                  color: '#424242',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {file.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    padding: '40px 60px',
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: '500',
    color: '#673ab7',
    marginBottom: '40px',
    marginTop: '0'
  };

  const mainGridStyle: React.CSSProperties = {
    display: 'flex',
    gap: '40px'
  };

  const leftColumnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: '500',
    color: '#424242',
    marginBottom: '16px',
    marginTop: '0'
  };

  const rightColumnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>New Jobs</h1>
      
      <div style={mainGridStyle}>
        {/* Left Column - Upload Options */}
        <div style={leftColumnStyle}>
          {/* Upload Document Section */}
          <div>
            <h2 style={sectionTitleStyle}>To Upload Document</h2>
            <UploadArea />
          </div>
          
          {/* Import Document Section */}
          <div>
            <h2 style={sectionTitleStyle}>Import Document</h2>
            <ImportArea />
          </div>
        </div>
        
        {/* Right Column - Documents Selected */}
        <div style={rightColumnStyle}>
          <h2 style={sectionTitleStyle}>Documents Selected</h2>
          <DocumentsSelected />
        </div>
      </div>
    </div>
  );
};

export default Jobs;