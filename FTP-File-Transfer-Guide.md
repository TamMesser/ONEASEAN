# FTP File Transfer Guide for Messer ASEAN

## Overview

While Microsoft Teams provides excellent file sharing capabilities, there may be occasions when you need to transfer files using FTP (File Transfer Protocol). This guide covers how to create and manage FTP file transfers as a complement to your Teams collaboration workflow.

---

## What is FTP?

FTP (File Transfer Protocol) is a standard network protocol used for transferring files between computers over a network. It's particularly useful for:
- Large file transfers that exceed Teams file size limits
- Automated file transfers
- Transferring files to/from external partners who don't have Teams access
- Backup and archival processes

---

## 1. Creating FTP Files for Transfer

### Preparing Your Files

1. **Organize Your Files**
   - Create a clear folder structure
   - Use descriptive filenames (avoid spaces and special characters)
   - Compress large files or folders into ZIP archives when appropriate

2. **File Naming Best Practices**
   - Use format: `YYYY-MM-DD_ProjectName_Version.ext`
   - Example: `2024-03-15_ASEAN_Quarterly_Report_v1.2.pdf`
   - Avoid spaces, use underscores or hyphens instead

3. **File Size Considerations**
   - Single files: Generally no limit for FTP
   - For very large files (>100MB), consider compression
   - Split extremely large files if needed

---

## 2. Setting Up FTP Access

### For IT Administrators

1. **Configure FTP Server**
   - Set up secure FTP (SFTP) or FTPS for encryption
   - Create user accounts with appropriate permissions
   - Define folder access rights per user/group

2. **Security Settings**
   - Enable SSL/TLS encryption
   - Use strong authentication methods
   - Implement IP restrictions if needed
   - Regular security audits

### For End Users

1. **Get FTP Credentials**
   - Contact IT for FTP server details
   - Receive: hostname, username, password, port number
   - Ensure you understand your access permissions

---

## 3. FTP Client Software

### Recommended FTP Clients

**For Windows:**
- **FileZilla** (Free, user-friendly)
- **WinSCP** (Free, secure)
- **WS_FTP** (Commercial)

**For Mac:**
- **FileZilla** (Free, cross-platform)
- **Transmit** (Commercial)
- **Cyberduck** (Free)

**For Mobile:**
- **FTP Manager** (iOS/Android)
- **AndFTP** (Android)

### Basic FTP Client Setup

1. **Download and Install**
   - Choose an FTP client from the list above
   - Download from official website only
   - Install following standard security practices

2. **Configure Connection**
   - Host: Your FTP server address
   - Username: Your assigned username
   - Password: Your assigned password
   - Port: Usually 21 (FTP) or 22 (SFTP)
   - Protocol: Choose SFTP for security

---

## 4. How to Transfer Files via FTP

### Step-by-Step Transfer Process

1. **Connect to FTP Server**
   - Open your FTP client
   - Enter server details
   - Click "Connect" or "Login"

2. **Navigate Directories**
   - Left panel: Your local computer files
   - Right panel: FTP server directories
   - Use folder navigation to find correct locations

3. **Upload Files**
   - Select files in left panel (local)
   - Drag and drop to right panel (server)
   - Or use "Upload" button
   - Monitor transfer progress

4. **Download Files**
   - Select files in right panel (server)
   - Drag and drop to left panel (local)
   - Or use "Download" button
   - Verify successful transfer

---

## 5. FTP vs Teams File Sharing

### When to Use FTP
- Files larger than Teams limits (currently 100GB per file)
- Automated/scheduled transfers
- External partner file exchange
- Legacy system integration
- Bulk file operations

### When to Use Teams
- Daily collaboration files
- Real-time document editing
- Team discussions around files
- Version control and comments
- Files under size limits

---

## 6. Security Best Practices

### File Security
- **Encrypt sensitive files** before uploading
- **Use secure FTP protocols** (SFTP/FTPS)
- **Verify file integrity** after transfer
- **Delete temporary files** after transfer

### Access Security
- **Change default passwords** immediately
- **Use strong passwords** (12+ characters)
- **Enable two-factor authentication** if available
- **Log out completely** after each session

---

## 7. Troubleshooting Common Issues

### Connection Problems
- **Check server address and port**
- **Verify username/password**
- **Check firewall settings**
- **Try passive mode if connection fails**

### Transfer Issues
- **Resume interrupted transfers** if supported
- **Check available disk space**
- **Verify file permissions**
- **Use binary mode for non-text files**

### Performance Optimization
- **Use compression for multiple files**
- **Transfer during off-peak hours**
- **Consider parallel transfers for multiple files**
- **Monitor network bandwidth usage**

---

## 8. Integration with Teams Workflow

### Best Practices for ASEAN Teams

1. **Notification Process**
   - Upload files via FTP
   - Notify team via Teams chat/channel
   - Share file location and access details
   - Confirm successful download with recipients

2. **Documentation**
   - Keep transfer logs
   - Document file versions and locations
   - Maintain backup copies when appropriate

3. **Collaboration**
   - Use Teams for discussion about FTP-transferred files
   - Share screenshots or summaries in Teams channels
   - Coordinate timing across Thailand, Vietnam, and Malaysia time zones

---

## 9. Getting Help

### Internal Support
- **IT Support:** Contact your local IT team for FTP server access
- **Teams Champions:** Ask country Champions for workflow integration advice
- **Training:** Request FTP training sessions if needed

### External Resources
- [FileZilla Documentation](https://filezilla-project.org/documentation.php)
- [WinSCP Documentation](https://winscp.net/eng/docs/)
- [FTP Security Best Practices](https://www.ftp-security.com/)

---

## Quick Reference Card

| Task | Teams | FTP |
|------|-------|-----|
| Files < 100MB | ✅ Recommended | ⚠️ Optional |
| Files > 100MB | ❌ Not supported | ✅ Recommended |
| Real-time collaboration | ✅ Excellent | ❌ Not supported |
| External partners | ⚠️ Guest access required | ✅ Easy sharing |
| Automated transfers | ❌ Manual only | ✅ Scriptable |
| Version control | ✅ Built-in | ❌ Manual |
| Security | ✅ Enterprise-grade | ⚠️ Depends on setup |

---

**Remember:** FTP complements Teams file sharing but doesn't replace it. Use the right tool for each situation to maximize your Messer ASEAN collaboration efficiency!

---

*For additional assistance, contact your local IT support team or Teams Champion.*