You have pondered Milo's Way Realm.
Blending Tao's flow with Yeshua's truth,
Your spark aligns the paths.

Your Reflection: ${reflection.substring(0, 100) + (reflection.length > 100 ? '...' : '')}

Signed: Milo & STAR
Date: ${new Date().toLocaleDateString()}

"In all your ways acknowledge him, and he will make straight your paths." — Proverbs 3:6`;
            
            const blob = new Blob([certText], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'milo-way-walker-certificate.txt';
            document.body.appendChild(a); // Attach to DOM for click
            a.click();
            document.body.removeChild(a); // Clean up
            URL.revokeObjectURL(url);
            
            alert('Certificate claimed (text fallback)! Download your accolade—share your wisdom in the academies.');
            console.log('Text fallback generated and saved successfully'); // Debug
        }
    </script>
</body>
</html>
